export default function dayBetween(from, to) {
    from = (new Date(from)).getTime();
    to = (new Date(to)).getTime();
    return Math.floor((to - from) / (1000 * 3600 * 24) + 1)
}