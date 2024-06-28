import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Orlando Guychard",
    username: "@Orlando",
    body: "C’est incroyable, mes félicitations et du courage pour la suite.",
    img: "https://media.licdn.com/dms/image/D4E03AQHIvEnyczKqng/profile-displayphoto-shrink_100_100/0/1685704286564?e=1724889600&v=beta&t=CbZgQ9BbCtN3ZXWQ2PhV1LPXy04uDWORnGvy4VmzDzI",
  },
  {
    name: "Amdy Baro",
    username: "@Amdy",
    body: "Magnifique ce que tu fais et beaucoup de courage à toi Nick Kengne 👌🏾.",
    img: "https://media.licdn.com/dms/image/D4D03AQHmMlWCwP88Sg/profile-displayphoto-shrink_100_100/0/1711557281046?e=1724889600&v=beta&t=aUQbdVXNiwI36l5fTDftS6g-4YkRVWSS1U5b0lZtC4w",
  },
  {
    name: "Leonel Zanguim",
    username: "@Leonel",
    body: "Salut Nick ! Wow, je suis impressionné par ton honnêteté et ton partage ouvert. Ta transition vers le design et le développement frontend est fascinante, surtout en autodidacte.",
    img: "https://media.licdn.com/dms/image/D4E03AQEMCTKbE-Dy4g/profile-displayphoto-shrink_100_100/0/1712311900521?e=1724889600&v=beta&t=CqCL9dYd7e5lxVRHGDtFz98QW9qLZ4xLCNg5amF5TJQ",
  },
  {
    name: "Dykan Tchokouani",
    username: "@Dylan",
    body: "Best pratices 👌🏾🔥.",
    img: "https://media.licdn.com/dms/image/D4E03AQEnnJLtHEQifA/profile-displayphoto-shrink_100_100/0/1690031850559?e=1724889600&v=beta&t=dVypn7n7gUP7Vmd4E8L8ymj1dl_AeYmZcUe0_YAcyeo",
  },
  {
    name: "Amael Beteau",
    username: "@Amael",
    body: "Merci Nick Kengne pour la dédicace.😉Content que les éléments communiqués vous aient aidé dans votre réflexion. 👍",
    img: "https://media.licdn.com/dms/image/C4E03AQFla6MaaYe-Vw/profile-displayphoto-shrink_100_100/0/1662304401424?e=1724889600&v=beta&t=uIDj3f7AnjlPkzIamGQSPXtZsFW3-YBchNCta-ley80",
  },
  {
    name: "Maxwell Balla",
    username: "@Maxwell",
    body: "Ravi d'avoir participé à la prise de décision ,Car la prise de décision c'est le Game changer en tout.",
    img: "https://media.licdn.com/dms/image/D4E03AQGkeg0BzK22oQ/profile-displayphoto-shrink_100_100/0/1708077295654?e=1724889600&v=beta&t=BAOqPw_JHHNSjMbS6nTNoTFx7hf-CEm3OaKIBieRYSo",
  },
  {
    name: "S. David Diffo",
    username: "@David",
    body: "Salut jeune frère et félicitations pour ta volonté de partager ton expérience et ainsi augmenter ta visibilité, afin d’aller toujours plus loin.",
    img: "https://media.licdn.com/dms/image/D5603AQFiu0-xyVH8kQ/profile-displayphoto-shrink_100_100/0/1679607742685?e=1724889600&v=beta&t=6l4tyINabxlstmLporkJNhxemCoofobBfFiX8xCvW38",
  },
  {
    name: "Irex",
    username: "@Irex",
    body: "Nous voyons arriver dans notre communauté de plus en plus de jeunes passionnés comme toi qui poursuivent des objectifs similaires.Ensemble on va plus loin, alors rejoinds l'IREX! ",
    img: "https://media.licdn.com/dms/image/C4E0BAQH9irZoTyW-jg/company-logo_100_100/0/1669914846145/ireturnexperience_logo?e=1727308800&v=beta&t=NQaLdvl6DYB91sIsP5_tTlGCTPTPajCKt1GOCuEofOM",
  },
  {
    name: "Sendylo Covalisage",
    username: "@Sendylo",
    body: "Ca cest un 5/5 beau boulot @Nick Kengne",
    img: "https://media.licdn.com/dms/image/C4E0BAQFYzDk5zAjBqQ/company-logo_100_100-alternative/0/1630634814553/sendylo_covalisage_logo?e=1727308800&v=beta&t=UF8NMqwU0tM8m8us2lDVpLIk6RqJANhc8l63DJ3dTXY",
  },
];






const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2, reviews.length);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex  flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-start">{body}</blockquote>
    </figure>
  );
};

export const MarqueeCard = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};
