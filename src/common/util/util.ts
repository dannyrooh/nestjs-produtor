export default class Util {

    public static unformat(value: string): string {
        return value.replace(/([^\d])+/gim, '');
    }

    public static isOnlyChar(value: string): boolean {
        return value.split(value[0]).join('').length == 0;
    }

}
