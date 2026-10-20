// *************************** 12. DOM: Count How Many Times a Specific Tag Appears **********************//

function countAppearsTag(node, targetTag) {
  let count = 0;
  if (node.localName === targetTag) {
    count++;
  }
  for (const child of node.children) {
    count += countAppearsTag(child, targetTag);
  }
  return count;
}
console.log(countAppearsTag(document.body, "div"));

const mediaTree = {
  name: "media",
  children: [
    {
      name: "images",
      children: [
        {
          name: "events",
          children: [
            {
              name: "birthday",
              children: [
                { name: "cake.png", children: [] },
                { name: "party.jpg", children: [] },
              ],
            },
          ],
        },
        {
          name: "wallpapers",
          children: [
            { name: "nature.jpg", children: [] },
            { name: "city.png", children: [] },
          ],
        },
      ],
    },
    {
      name: "music",
      children: [
        {
          name: "rock",
          children: [{ name: "song1.mp3", children: [] }],
        },
      ],
    },
    {
      name: "videos",
      children: [],
    },
  ],
};
