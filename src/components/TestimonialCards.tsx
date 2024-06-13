"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const musicSchoolTestimonials = [
  {
    "quote": "I can't feel my face when I'm with you\nBut I love it, but I love it, oh\nAnd I know she'll be the death of me, at least we'll both be numb",
    "name": "The Weeknd",
    "title": "Singer"
  },
  {
    "quote": "You used to call me on my cell phone\nLate-night when you need my love\nAnd I know when that hotline bling",
    "name": "Drake",
    "title": "Singer"
  },
  {
    "quote": "It's lit! Straight up!\nYeah, rollin', rollin', rollin', got me stargazin'\nSippin' on purp, feelin' like the Barre Baby",
    "name": "Travis Scott",
    "title": "Singer"
  },
  {
    "quote": "You don't know you're beautiful\nIf only you saw what I can see\nYou'll understand why I want you so desperately",
    "name": "One Direction",
    "title": "Band"
  },
  {
    "quote": "I'm in love with the shape of you\nWe push and pull like a magnet do\nAlthough my heart is falling too",
    "name": "Ed Sheeran",
    "title": "Singer"
  },
  {
    "quote": "You are my fire\nThe one desire\nBelieve when I say",
    "name": "Backstreet Boys",
    "title": "Band"
  }
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl text-white font-bold text-center mb-8 z-10">
      Harmonious Hits: Voices of Success from Today's Music Legends
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
