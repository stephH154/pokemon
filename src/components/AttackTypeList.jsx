import React from "react";

const attackTypes = [
  {
    name: "Normal",
    class: "type-normal",
    src: "https://archives.bulbagarden.net/media/upload/thumb/a/ae/Normal_icon.png/20px-Normal_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/a/ae/Normal_icon.png/30px-Normal_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/a/ae/Normal_icon.png/40px-Normal_icon.png 2x",
  },
  {
    name: "Fire",
    class: "type-fire",
    src: "https://archives.bulbagarden.net/media/upload/thumb/5/5e/Fire_icon.png/20px-Fire_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/5/5e/Fire_icon.png/30px-Fire_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/5/5e/Fire_icon.png/40px-Fire_icon.png 2x",
  },
  {
    name: "Water",
    class: "type-water",
    src: "https://archives.bulbagarden.net/media/upload/thumb/7/7f/Water_icon.png/20px-Water_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/7/7f/Water_icon.png/30px-Water_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/7/7f/Water_icon.png/40px-Water_icon.png 2x",
  },
  {
    name: "Electric",
    class: "type-electric",
    src: "https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/20px-Electric_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/30px-Electric_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/40px-Electric_icon.png 2x",
  },
  {
    name: "Grass",
    class: "type-grass",
    src: "https://archives.bulbagarden.net/media/upload/thumb/c/cb/Grass_icon.png/20px-Grass_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/c/cb/Grass_icon.png/30px-Grass_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/c/cb/Grass_icon.png/40px-Grass_icon.png 2x",
  },
  {
    name: "Ice",
    class: "type-ice",
    src: "https://archives.bulbagarden.net/media/upload/thumb/8/83/Ice_icon.png/20px-Ice_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/8/83/Ice_icon.png/30px-Ice_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/8/83/Ice_icon.png/40px-Ice_icon.png 2x",
  },
  {
    name: "Fighting",
    class: "type-fighting",
    src: "https://archives.bulbagarden.net/media/upload/thumb/7/7d/Fighting_icon.png/20px-Fighting_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/7/7d/Fighting_icon.png/30px-Fighting_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/7/7d/Fighting_icon.png/40px-Fighting_icon.png 2x",
  },
  {
    name: "Poison",
    class: "type-poison",
    src: "https://archives.bulbagarden.net/media/upload/thumb/8/84/Poison_icon.png/20px-Poison_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/8/84/Poison_icon.png/30px-Poison_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/8/84/Poison_icon.png/40px-Poison_icon.png 2x",
  },
  {
    name: "Ground",
    class: "type-ground",
    src: "https://archives.bulbagarden.net/media/upload/thumb/5/58/Ground_icon.png/20px-Ground_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/5/58/Ground_icon.png/30px-Ground_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/5/58/Ground_icon.png/40px-Ground_icon.png 2x",
  },
  {
    name: "Flying",
    class: "type-flying",
    src: "https://archives.bulbagarden.net/media/upload/thumb/f/f0/Flying_icon.png/20px-Flying_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/f/f0/Flying_icon.png/30px-Flying_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/f/f0/Flying_icon.png/40px-Flying_icon.png 2x",
  },
  {
    name: "Psychic",
    class: "type-psychic",
    src: "https://archives.bulbagarden.net/media/upload/thumb/a/a6/Psychic_icon.png/20px-Psychic_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/a/a6/Psychic_icon.png/30px-Psychic_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/a/a6/Psychic_icon.png/40px-Psychic_icon.png 2x",
  },
  {
    name: "Bug",
    class: "type-bug",
    src: "https://archives.bulbagarden.net/media/upload/thumb/7/79/Bug_icon.png/20px-Bug_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/7/79/Bug_icon.png/30px-Bug_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/7/79/Bug_icon.png/40px-Bug_icon.png 2x",
  },
  {
    name: "Rock",
    class: "type-rock",
    src: "https://archives.bulbagarden.net/media/upload/thumb/f/ff/Rock_icon.png/20px-Rock_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/f/ff/Rock_icon.png/30px-Rock_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/f/ff/Rock_icon.png/40px-Rock_icon.png 2x",
  },
  {
    name: "Ghost",
    class: "type-ghost",
    src: "https://archives.bulbagarden.net/media/upload/thumb/8/82/Ghost_icon.png/20px-Ghost_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/8/82/Ghost_icon.png/30px-Ghost_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/8/82/Ghost_icon.png/40px-Ghost_icon.png 2x",
  },
  {
    name: "Dragon",
    class: "type-dragon",
    src: "https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/20px-Dragon_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/30px-Dragon_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/40px-Dragon_icon.png 2x",
  },
  {
    name: "Dark",
    class: "type-dark",
    src: "https://archives.bulbagarden.net/media/upload/thumb/3/33/Dark_icon.png/20px-Dark_icon.png",
    srcset:
      "https://archives.bulbagarden.net/media/upload/thumb/3/33/Dark_icon.png/30px-Dark_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/3/33/Dark_icon.png/40px-Dark_icon.png 2x",
  },
  {
    name: "Steel",
    class: "type-steel",
    src: "https://archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/20px-Steel_icon.png",
  },
  {
    name: "Fairy",
    class: "type-fairy",
    src: "https://archives.bulbagarden.net/media/upload/thumb/5/5a/Fairy_icon.png/20px-Fairy_icon.png",
  },
];

const AttackTypeList = () => {
  return (
    <div className="attack container overflow-y-auto mt-2 w-1/4  ">
      <h3 className="mb-4">Attack Type</h3>
      <ul
        id="attack-type"
        className="flex flex-col list-none m-4 ml-5 mr-5 p-0"
      >
        {attackTypes.map((type, index) => (
          <li
            key={index}
            className="flex items-center px-2 py-0 rounded-full text-xs font-medium transform scale-75 origin-left type-hover"
            style={{ width: "auto" }}
          >
            <span
              className={`t-type ${type.class} flex items-center`}
              data-value={type.name.toLowerCase()}
              style={{ width: "fit-content" }}
            >
              <img
                alt={`${type.name} icon.png`}
                src={type.src}
                srcSet={type.srcset}
                className="mr-1"
              />
              {type.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttackTypeList;
