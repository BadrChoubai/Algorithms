const truncateParagraph = (pg, length) => pg.replace(pg.substring(pg.length / length), '...');

console.log(truncateParagraph("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusantium molestias inventore omnis velit error sunt autem architecto quisquam vero?", 2))
