const dishes = [
  {
    id: 1,
    name: "水煮腊排骨",
    category: "肉菜",
    emoji: "🍖",
    hot: false
  },
  {
    id: 2,
    name: "腊排骨豆角土豆焖面",
    category: "主食",
    emoji: "🍜",
    hot: true
  },
  {
    id: 3,
    name: "五花肉炒土豆片",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 4,
    name: "炒花菜",
    category: "素菜",
    emoji: "🥬",
    hot: false
  },
  {
    id: 5,
    name: "炒大白菜",
    category: "素菜",
    emoji: "🥬",
    hot: false
  },
  {
    id: 6,
    name: "炒丝瓜",
    category: "素菜",
    emoji: "🥬",
    hot: false
  },
  {
    id: 7,
    name: "鱼香肉丝",
    category: "肉菜",
    emoji: "🐟",
    hot: false
  },
  {
    id: 8,
    name: "宫保鸡丁",
    category: "肉菜",
    emoji: "🍗",
    hot: false
  },
  {
    id: 9,
    name: "溜肉段",
    category: "肉菜",
    emoji: "🥘",
    hot: true
  },
  {
    id: 10,
    name: "锅包肉",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 11,
    name: "焖烧豆腐娃娃菜",
    category: "素菜",
    emoji: "🍲",
    hot: false
  },
  {
    id: 12,
    name: "糖醋排骨",
    category: "肉菜",
    emoji: "🍖",
    hot: false
  },
  {
    id: 13,
    name: "炒豆芽",
    category: "素菜",
    emoji: "🥬",
    hot: false
  },
  {
    id: 14,
    name: "豉油鸡",
    category: "肉菜",
    emoji: "🍗",
    hot: false
  },
  {
    id: 15,
    name: "蒜苔炒肉丝",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 16,
    name: "豆角烧茄子",
    category: "素菜",
    emoji: "🍆",
    hot: false
  },
  {
    id: 17,
    name: "银鱼炒鸡蛋",
    category: "鱼虾海鲜",
    emoji: "🐟",
    hot: false
  },
  {
    id: 18,
    name: "茭白肉丝",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 19,
    name: "红烧带鱼",
    category: "鱼虾海鲜",
    emoji: "🐟",
    hot: false
  },
  {
    id: 20,
    name: "炸带鱼",
    category: "鱼虾海鲜",
    emoji: "🐟",
    hot: false
  },
  {
    id: 21,
    name: "炸小黄花鱼",
    category: "鱼虾海鲜",
    emoji: "🐟",
    hot: false
  },
  {
    id: 22,
    name: "炸小鲳鱼",
    category: "鱼虾海鲜",
    emoji: "🐟",
    hot: false
  },
  {
    id: 23,
    name: "炖笋壳鱼",
    category: "鱼虾海鲜",
    emoji: "🐟",
    hot: false
  },
  {
    id: 24,
    name: "炖多宝鱼",
    category: "鱼虾海鲜",
    emoji: "🐟",
    hot: true
  },
  {
    id: 25,
    name: "水煮虾",
    category: "鱼虾海鲜",
    emoji: "🍤",
    hot: false
  },
  {
    id: 26,
    name: "红烧牛蹄筋",
    category: "肉菜",
    emoji: "🥩",
    hot: false
  },
  {
    id: 27,
    name: "辣子鸡",
    category: "肉菜",
    emoji: "🍗",
    hot: false
  },
  {
    id: 28,
    name: "尖椒肥肠",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 29,
    name: "酸辣牛杂",
    category: "肉菜",
    emoji: "🥩",
    hot: false
  },
  {
    id: 30,
    name: "手撕包菜",
    category: "素菜",
    emoji: "🥬",
    hot: false
  },
  {
    id: 31,
    name: "辣椒炒肉",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 32,
    name: "口蘑烧鸡腿",
    category: "肉菜",
    emoji: "🍗",
    hot: false
  },
  {
    id: 33,
    name: "肉沫豆角",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 34,
    name: "擂椒皮蛋",
    category: "凉菜小菜",
    emoji: "🥗",
    hot: false
  },
  {
    id: 35,
    name: "土豆豆角炖排骨",
    category: "肉菜",
    emoji: "🍖",
    hot: false
  },
  {
    id: 36,
    name: "炒空心菜",
    category: "素菜",
    emoji: "🥬",
    hot: false
  },
  {
    id: 37,
    name: "炒时蔬",
    category: "素菜",
    emoji: "🥬",
    hot: true
  },
  {
    id: 38,
    name: "牛排炖豆角粉条",
    category: "肉菜",
    emoji: "🥩",
    hot: true
  },
  {
    id: 39,
    name: "大盘鸡",
    category: "肉菜",
    emoji: "🍗",
    hot: true
  },
  {
    id: 40,
    name: "新疆炒米粉",
    category: "主食",
    emoji: "🍜",
    hot: false
  },
  {
    id: 41,
    name: "麻辣烫",
    category: "主食",
    emoji: "🍚",
    hot: false
  },
  {
    id: 42,
    name: "西芹虾仁",
    category: "鱼虾海鲜",
    emoji: "🍤",
    hot: false
  },
  {
    id: 43,
    name: "炒腰花",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 44,
    name: "溜肝尖",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 45,
    name: "番茄牛腩",
    category: "肉菜",
    emoji: "🥩",
    hot: false
  },
  {
    id: 46,
    name: "酸菜炖大骨",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 47,
    name: "腊肉干豆角",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 48,
    name: "腊肉笋干",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 49,
    name: "杏鲍菇牛肉粒",
    category: "肉菜",
    emoji: "🥩",
    hot: false
  },
  {
    id: 50,
    name: "煎牛排",
    category: "肉菜",
    emoji: "🥩",
    hot: false
  },
  {
    id: 51,
    name: "手工饺子",
    category: "主食",
    emoji: "🥟",
    hot: false
  },
  {
    id: 52,
    name: "腊肉土豆炒饭",
    category: "主食",
    emoji: "🍚",
    hot: false
  },
  {
    id: 53,
    name: "西红柿鸡蛋挂面",
    category: "主食",
    emoji: "🍜",
    hot: false
  },
  {
    id: 54,
    name: "青椒土豆肉丝挂面",
    category: "主食",
    emoji: "🍜",
    hot: false
  },
  {
    id: 55,
    name: "煮方便面",
    category: "主食",
    emoji: "🍜",
    hot: false
  },
  {
    id: 56,
    name: "凉拌海蜇皮",
    category: "凉菜小菜",
    emoji: "🥗",
    hot: false
  },
  {
    id: 57,
    name: "荷塘小炒",
    category: "素菜",
    emoji: "🥬",
    hot: false
  },
  {
    id: 58,
    name: "土豆丝饼",
    category: "主食",
    emoji: "🥙",
    hot: false
  },
  {
    id: 59,
    name: "玉米面饼",
    category: "主食",
    emoji: "🍜",
    hot: false
  },
  {
    id: 60,
    name: "千层小饼",
    category: "主食",
    emoji: "🥙",
    hot: false
  },
  {
    id: 61,
    name: "意面",
    category: "主食",
    emoji: "🍜",
    hot: false
  },
  {
    id: 62,
    name: "三文鱼",
    category: "鱼虾海鲜",
    emoji: "🐟",
    hot: false
  },
  {
    id: 63,
    name: "芦笋口蘑",
    category: "素菜",
    emoji: "🥬",
    hot: false
  },
  {
    id: 64,
    name: "手抓饭",
    category: "主食",
    emoji: "🍚",
    hot: false
  },
  {
    id: 65,
    name: "炒年糕",
    category: "主食",
    emoji: "🍚",
    hot: false
  },
  {
    id: 66,
    name: "辣炒花蛤",
    category: "鱼虾海鲜",
    emoji: "🦪",
    hot: false
  },
  {
    id: 67,
    name: "蚂蚁上树",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 68,
    name: "蒸鸡蛋糕",
    category: "素菜",
    emoji: "🥬",
    hot: false
  },
  {
    id: 69,
    name: "炸酱面",
    category: "主食",
    emoji: "🍜",
    hot: false
  },
  {
    id: 70,
    name: "芹菜土豆丝",
    category: "素菜",
    emoji: "🥔",
    hot: false
  },
  {
    id: 71,
    name: "凉拌鸡胗",
    category: "凉菜小菜",
    emoji: "🥗",
    hot: false
  },
  {
    id: 72,
    name: "葱油拌面",
    category: "主食",
    emoji: "🍜",
    hot: false
  },
  {
    id: 73,
    name: "干煸茶树菇",
    category: "素菜",
    emoji: "🥬",
    hot: false
  },
  {
    id: 74,
    name: "香辣羊蝎子",
    category: "肉菜",
    emoji: "🥩",
    hot: false
  },
  {
    id: 75,
    name: "西红柿鸡蛋",
    category: "素菜",
    emoji: "🥬",
    hot: false
  },
  {
    id: 76,
    name: "皮蛋豆腐",
    category: "凉菜小菜",
    emoji: "🥗",
    hot: false
  },
  {
    id: 77,
    name: "豆豉蒸排骨",
    category: "肉菜",
    emoji: "🍖",
    hot: false
  },
  {
    id: 78,
    name: "京酱肉丝",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 79,
    name: "白切牛肋条",
    category: "肉菜",
    emoji: "🥩",
    hot: false
  },
  {
    id: 80,
    name: "凉拌莴笋丝",
    category: "凉菜小菜",
    emoji: "🥗",
    hot: false
  },
  {
    id: 81,
    name: "炸小酥肉",
    category: "肉菜",
    emoji: "🥘",
    hot: false
  },
  {
    id: 82,
    name: "炒油麦菜",
    category: "素菜",
    emoji: "🥬",
    hot: false
  },
  {
    id: 83,
    name: "疙瘩汤",
    category: "主食",
    emoji: "🍚",
    hot: false
  },
  {
    id: 84,
    name: "牛肉汉堡",
    category: "主食",
    emoji: "🍚",
    hot: false
  },
  {
    id: 85,
    name: "蛋炒饭",
    category: "主食",
    emoji: "🍚",
    hot: false
  },
  {
    id: 86,
    name: "杂粮饭",
    category: "主食",
    emoji: "🍚",
    hot: false
  },
  {
    id: 87,
    name: "白米饭（配鸭蛋）",
    category: "主食",
    emoji: "🍚",
    hot: false
  }
];

const categories = ["全部", "肉菜", "鱼虾海鲜", "素菜", "凉菜小菜", "主食"];
const selectedIds = new Set();

const categoryTabs = document.getElementById("categoryTabs");
const dishGrid = document.getElementById("dishGrid");
const hotList = document.getElementById("hotList");
const selectedCount = document.getElementById("selectedCount");
const selectedList = document.getElementById("selectedList");
const drawerCountText = document.getElementById("drawerCountText");
const dishCount = document.getElementById("dishCount");
const randomMenuBtn = document.getElementById("randomMenuBtn");
const menuFab = document.getElementById("menuFab");
const menuDrawer = document.getElementById("menuDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");
const dishCardTemplate = document.getElementById("dishCardTemplate");
const selectedItemTemplate = document.getElementById("selectedItemTemplate");
const optionItemTemplate = document.getElementById("optionItemTemplate");
const barSummaryText = document.getElementById("barSummaryText");
const toast = document.getElementById("toast");
const actionPanel = document.getElementById("actionPanel");
const hotSection = document.getElementById("hotSection");
const actionToggle = document.getElementById("actionToggle");
const hotToggle = document.getElementById("hotToggle");
const generatedBlock = document.getElementById("generatedBlock");
const generatedList = document.getElementById("generatedList");

let activeCategory = "全部";
let toastTimer = null;
let generatedDishIds = [];

function shuffle(array) {
  const result = [...array];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}

function getSelectedDishes() {
  return dishes.filter((dish) => selectedIds.has(dish.id));
}

function updateDrawerSummary() {
  const count = selectedIds.size;
  selectedCount.textContent = String(count);
  drawerCountText.textContent =
    count > 0 ? `已经选了 ${count} 道，今天这顿开始有样子了。` : "还没选菜，先去逛逛吧";
  barSummaryText.textContent = count > 0 ? `已选 ${count} 道菜` : "还没选菜";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function pickRandomDishes(count, excludedIds = new Set()) {
  return shuffle(dishes.filter((dish) => !excludedIds.has(dish.id))).slice(0, Math.max(0, count));
}

function addDishToMenu(dish) {
  if (selectedIds.has(dish.id)) {
    selectedIds.delete(dish.id);
    showToast(`已移除 ${dish.name}`);
  } else {
    selectedIds.add(dish.id);
    showToast(`已加入 ${dish.name}`);
  }
  refreshAll();
}

function renderSelectedList() {
  const currentSelected = getSelectedDishes();
  selectedList.innerHTML = "";

  if (currentSelected.length === 0) {
    const emptyState = document.createElement("li");
    emptyState.className = "selected-item";
    emptyState.innerHTML = "<div><strong>菜单空空</strong><p>去菜品区点几道，或者直接随机生成。</p></div>";
    selectedList.append(emptyState);
    updateDrawerSummary();
    return;
  }

  currentSelected.forEach((dish) => {
    const item = selectedItemTemplate.content.firstElementChild.cloneNode(true);
    item.querySelector("strong").textContent = dish.name;
    item.querySelector("p").textContent = `${dish.category}`;
    item.querySelector(".remove-btn").addEventListener("click", () => {
      selectedIds.delete(dish.id);
      refreshAll();
    });
    selectedList.append(item);
  });

  updateDrawerSummary();
}

function renderHotList() {
  const hotDishes = dishes.filter((dish) => dish.hot).slice(0, 6);
  hotList.innerHTML = "";

  hotDishes.forEach((dish) => {
    const chip = document.createElement("article");
    chip.className = "hot-chip";
    const label = document.createElement("strong");
    label.textContent = `${dish.emoji} ${dish.name}`;
    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "add-btn";
    addButton.textContent = selectedIds.has(dish.id) ? "−" : "+";
    addButton.classList.toggle("selected", selectedIds.has(dish.id));
    addButton.addEventListener("click", () => addDishToMenu(dish));
    chip.append(label, addButton);
    hotList.append(chip);
  });
}

function renderCategoryTabs() {
  categoryTabs.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab-btn${category === activeCategory ? " active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      activeCategory = category;
      renderCategoryTabs();
      renderDishGrid();
    });
    categoryTabs.append(button);
  });
}

function renderDishGrid() {
  const visibleDishes =
    activeCategory === "全部" ? dishes : dishes.filter((dish) => dish.category === activeCategory);

  dishGrid.innerHTML = "";

  visibleDishes.forEach((dish) => {
    const card = dishCardTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector(".dish-image").textContent = dish.emoji;
    card.querySelector("h3").textContent = dish.name;

    const addButton = card.querySelector(".add-btn");
    const isSelected = selectedIds.has(dish.id);
    addButton.textContent = isSelected ? "−" : "+";
    addButton.classList.toggle("selected", isSelected);
    addButton.addEventListener("click", () => addDishToMenu(dish));

    dishGrid.append(card);
  });
}

function renderGeneratedList() {
  generatedList.innerHTML = "";

  if (generatedDishIds.length === 0) {
    generatedBlock.hidden = true;
    return;
  }

  generatedBlock.hidden = false;

  generatedDishIds
    .map((dishId) => dishes.find((dish) => dish.id === dishId))
    .filter(Boolean)
    .forEach((dish) => {
      const item = optionItemTemplate.content.firstElementChild.cloneNode(true);
      item.querySelector("strong").textContent = `${dish.emoji} ${dish.name}`;
      const addButton = item.querySelector(".add-btn");
      addButton.textContent = selectedIds.has(dish.id) ? "−" : "+";
      addButton.classList.toggle("selected", selectedIds.has(dish.id));
      addButton.addEventListener("click", () => addDishToMenu(dish));
      generatedList.append(item);
    });
}

function toggleSection(section, toggleButton) {
  const isOpen = section.classList.toggle("is-open");
  toggleButton.setAttribute("aria-expanded", String(isOpen));
}

function openDrawer() {
  menuDrawer.classList.add("open");
  menuDrawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  menuDrawer.classList.remove("open");
  menuDrawer.setAttribute("aria-hidden", "true");
}

function generateRandomMenu() {
  const requestedCount = Number(dishCount.value);
  const excludedIds = new Set(generatedDishIds);
  const randomDishes = pickRandomDishes(Math.min(requestedCount, dishes.length), excludedIds);

  if (randomDishes.length === 0) {
    showToast("没有新的候选菜可以生成了");
    return;
  }

  generatedDishIds = randomDishes.map((dish) => dish.id);
  renderGeneratedList();
  showToast(`生成了 ${randomDishes.length} 道候选菜`);
}

function refreshAll() {
  renderDishGrid();
  renderHotList();
  renderGeneratedList();
  renderSelectedList();
}

randomMenuBtn.addEventListener("click", generateRandomMenu);
menuFab.addEventListener("click", openDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);
closeDrawerBtn.addEventListener("click", closeDrawer);
actionToggle.addEventListener("click", () => toggleSection(actionPanel, actionToggle));
hotToggle.addEventListener("click", () => toggleSection(hotSection, hotToggle));

renderCategoryTabs();
refreshAll();
