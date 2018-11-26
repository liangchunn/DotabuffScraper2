import { scrapeData } from "./requester";
import { heroes } from "./constants/heroes";

const sink: any[] = [];

let count = 0;

const printProgress = () => {
  const percentage = Math.ceil((count / heroes.length) * 100);
  console.log(`${percentage}%`);
};

scrapeData(heroes, "7.20", 10).subscribe({
  next: heroData => {
    sink.push(heroData);
    count++;
    printProgress();
  },
  complete: () => {
    console.log("Done!");
    // const all = sink.reduce((prev, curr) => {
    //   return {
    //     ...prev,
    //     ...curr
    //   };
    // }, {});
    // console.log(all);
  },
  error: e => {
    console.log(`Fatal error: ${e}`);
    console.log(`Exiting...`);
    process.exit(1);
  }
});
