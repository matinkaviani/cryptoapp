export default class UtilityService {
    static formatNumber(num, decimalLength = 1, dot = "/") {
        let isNegative = num < 0;
        num = Math.abs(num);
        let result = num;
        let suffix = "";
        const lessThanThousond = 999,
            thousond = 1000,
            million = 1000000,
            Billion = 1000000000,
            trillion = 1000000000000;

        if (num > lessThanThousond && num < million) {
            result = (num / thousond).toFixed(decimalLength);
            suffix = "K";
        } else if (num > million && num < Billion) {
            result = (num / 1000000).toFixed(decimalLength);
            suffix = "M";
        } else if (num > Billion && num < trillion) {
            result = (num / Billion).toFixed(decimalLength);
            suffix = "B";
        } else if (num >= trillion) {
            result = (num / trillion).toFixed(decimalLength);
            suffix = "T";
        }
        result = parseFloat(result);
        return `${isNegative ? "-" : ""}${result}${suffix}`.replace(".", dot);
    }
    static commaThousondSeperator(input, commo = ",") {
        if (!input) return input;
        let str = isNaN(input) ? input : input.toString();
        let arr = str.split(".");
        return (
            arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, commo) +
            (arr.length === 2 ? `.${arr[1]}` : "")
        );
    }
}


