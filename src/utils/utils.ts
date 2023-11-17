import image1 from "../assets/image1.jfif";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jfif";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jfif";
import image6 from "../assets/image6.jfif";

export const images = {
  image1: image1,
  image2: image2,
  image3: image3,
  image4: image4,
  image5: image5,
  image6: image6,
};

export const movies = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    year: 1994,
    image: images.image1,
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    description:
      "n 1947, Andy Dufresne (Tim Robbins), a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine has no death penalty, he is given two consecutive life sentences and sent to the notoriously harsh Shawshank Prison.",
  },
  {
    id: 2,
    name: "The Godfather",
    year: 1972,
    image: images.image2,
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The Godfather is a 1972 American crime film directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same name.",
  },
  {
    id: 3,
    name: "The Godfather: Part II",
    year: 1974,
    image: images.image3,
    cast: ["Al Pacino", "Robert Duvall", "Diane Keaton"],
    description:
      "The Godfather Part II is a 1974 American crime film produced and directed by Francis Ford Coppola from the screenplay co-written with Mario Puzo, starring Al Pacino, Robert Duvall, Diane Keaton, Robert De Niro, Talia Shire, Morgana King, John Cazale, Mariana Hill, and Lee Strasberg.",
  },
  {
    id: 4,
    name: "The Dark Knight",
    year: 2008,
    image: images.image4,
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    description:
      "The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman.",
  },
];
