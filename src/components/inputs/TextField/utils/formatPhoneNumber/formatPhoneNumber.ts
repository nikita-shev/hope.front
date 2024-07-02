const mask: string = '+7 (___) ___-__-__';
const minLength: number = 5;

export const formatPhoneNumber = (phone: string, template: string = mask): string => {
    const def: string = template.replace(/\D/g, '');
    const value: string = phone.replace(/\D/g, '');

    const r: string = template
        .slice(0, phone.length)
        .replace(/_+/g, (el: string): string => `\\d{1,${el.length}}`)
        .replace(/[+()]/g, '\\$&');
    const reg: RegExp = new RegExp(`^${r}$`);

    let i: number = 0;
    let newValue: string = template.replace(/[_\d]/g, (el: string): string => {
        return i < value.length ? value.charAt(i++) || def.charAt(i) : el;
    });

    i = newValue.indexOf('_');

    if (i !== -1) {
        newValue = newValue.slice(0, i);
    }

    return !reg.test(phone) || phone.length < minLength ? newValue : phone;
};
