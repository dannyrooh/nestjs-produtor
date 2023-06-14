export default class Util {

    public static unformat(value: string): string {
        return value.replace(/([^\d])+/gim, '');
    }

    public static isOnlyChar(value: string): boolean {
        return (value) ? value.replace(value[0], '').length == 0 : false;
    }

}
