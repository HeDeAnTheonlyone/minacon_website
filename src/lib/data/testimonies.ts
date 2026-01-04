import type { Testimony } from "$lib/types";
import kirarawan from "$lib/images/minasonas/kirarawan.png";
import simchuckywan from "$lib/images/minasonas/simchuckywan.png";
import samsawan from "$lib/images/minasonas/samsawan.png";
import miyawan from "$lib/images/minasonas/miyawan.png";
import schneewan from "$lib/images/minasonas/schneewan.png";
import vulgariswan from "$lib/images/minasonas/vulgariswan.png";
import hedewan from "$lib/images/minasonas/hedewan.png";

export const testimonies = [
    {
        name: "KiraraWan",
        text: "I had a great time! Hanging out with minawan was great the blistering sun!",
        img: kirarawan
    },
    {
        name: "SimChuckyWan",
        text: "Wan word: Peak",
        img: simchuckywan
    },
    {
        name: "SamsaWan",
        text: "MinaCon 2025 was the highlight of my year and an insane experience. The moment MinaCon 2025 ended, I already knew I wanted to create a second one.",
        img: samsawan
    },
    {
        name: "MiyaWan",
        text: "This was certainly the most silly thing i've ever planned and done in my life xD.\n I both miss just hanging out but also doing the big activities and i cannot wait to see all the lovely Minawan we've met again soon™ <3",
        img: miyawan
    },
    {
        name: "SchneeWan",
        text: "I loved every second of MinaCon 2025 and still think about it almost daily half a year later. :cerbyHYPERzoomies:",
        img: schneewan
    },
    {
        name: "VulgarisWan",
        text: "MinaCon. Amazing. I was sad leaving Vienna, and I'm super excited for the next one :mhm:",
        img: vulgariswan
    },
    {
        name: "HeDeWan",
        text: "It the best event I was ever part of and I met so many awesome people. I'll be there next time as well, 100%.",
        img: hedewan
    }
] as const satisfies readonly Testimony[];