const items = [
  { section: '3 Completed', group: 'Garden', title: 'Dig a hole', icon: '⛏' },
  { section: '3 Completed', group: 'Garden', title: 'Plant a tree', icon: '🌱' },
  { section: '1 To-Do', group: 'Garden', title: 'Water the tree', icon: '💧' },
  { section: '1 To-Do', title: 'Buy groceries', icon: '🛒' },
  { section: '1 To-Do', title: 'Take out the trash', icon: '🗑' },
  { section: '3 Completed', title: 'Check the mailbox', icon: '📫' },
  { section: '1 To-Do', group: 'Office', title: 'Set up the screen', icon: '🖥' },
  { section: '1 To-Do', group: 'Office', title: 'Buy external mouse', icon: '🖱' },
  { section: '2 Skipped', group: 'Office', title: 'Find lost headphones', icon: '🎧' },
  { section: '3 Completed', group: 'Garden', title: 'Plant another tree', icon: '🌱' },
];

const sections = items.map(item => item.section).filter((section, index, array) => array.indexOf(section) === index).sort();
const groups = [undefined, ...items.map(item => item.group).filter((group, index, array) => array.indexOf(group) === index).sort()];
items.sort((a, b) => {
  const section = sections.indexOf(a.section) - sections.indexOf(b.section);
  const group = groups.indexOf(a.group) - groups.indexOf(b.group);
  return section || group || a.title.localeCompare(b.title);
});

let alt = false;
let section;
let group;
let groupDiv;
for (const item of items) {
  if (item.section !== section) {
    section = item.section;
    group = undefined;
    groupDiv = undefined;

    const div = document.createElement('div');
    div.className = 'section';
    div.textContent = section;
    document.body.append(div);
  }

  if (item.group !== group) {
    group = item.group;

    if (group === undefined) {
      groupDiv = undefined;
    }
    else {
      const div = document.createElement('div');
      div.className = 'group';

      const labelDiv = document.createElement('div');
      labelDiv.className = 'groupLabel';
      div.append(labelDiv);

      const textDiv = document.createElement('div');
      textDiv.className = 'groupLabelText';
      textDiv.title = group;

      const textSpan = document.createElement('span');
      textSpan.className = 'groupLabelTextSpan';
      textSpan.textContent = group;
      textDiv.append(textSpan);

      labelDiv.append(textDiv);

      groupDiv = document.createElement('div');
      groupDiv.className = 'groupItems';
      div.append(groupDiv);

      document.body.append(div);
    }
  }

  const itemDiv = document.createElement('div');
  itemDiv.className = 'item';
  itemDiv.classList.toggle('alt', alt);
  alt = !alt;

  const iconSpan = document.createElement('span');
  iconSpan.textContent = item.icon;
  itemDiv.append(iconSpan);

  itemDiv.append(item.title);

  (groupDiv ?? document.body).append(itemDiv);
}
