export function statusColor(status) {
    switch (status) {
        case "в обработке":
            return "rgba(255, 107, 0, 1)";
        case "доставляется":
            return "rgba(237, 171, 0, 1)";
        case "в работе":
            return "rgba(40, 183, 55, 1)";
        case "завершен":
            return "rgba(20, 35, 61, 1)";
        default:
            return "rgba(171, 177, 197, 1)";
    }
}