const dishes = [
  {
    id: 1,
    name: "可乐鸡翅",
    category: "荤菜",
    emoji: "🍗",
    hot: true,
    description: "甜咸刚好，超级适合当今天的快乐担当。"
  },
  {
    id: 2,
    name: "番茄炒蛋",
    category: "家常",
    emoji: "🍅",
    hot: true,
    description: "稳稳的国民下饭菜，几乎很难出错。"
  },
  {
    id: 3,
    name: "蒜蓉西兰花",
    category: "素菜",
    emoji: "🥦",
    hot: false,
    description: "清爽解腻，给菜单加一点绿色平衡感。"
  },
  {
    id: 4,
    name: "玉米排骨汤",
    category: "汤品",
    emoji: "🍲",
    hot: true,
    description: "一锅热汤，家庭感立刻拉满。"
  },
  {
    id: 5,
    name: "宫保鸡丁",
    category: "荤菜",
    emoji: "🥢",
    hot: true,
    description: "微辣带甜，米饭杀手型选手。"
  },
  {
    id: 6,
    name: "地三鲜",
    category: "素菜",
    emoji: "🍆",
    hot: false,
    description: "土豆、茄子、青椒一起上桌，香得很直接。"
  },
  {
    id: 7,
    name: "香煎豆腐",
    category: "素菜",
    emoji: "🧈",
    hot: false,
    description: "外焦里嫩，适合喜欢轻负担的一餐。"
  },
  {
    id: 8,
    name: "酸辣土豆丝",
    category: "素菜",
    emoji: "🥔",
    hot: true,
    description: "脆爽开胃，和任何主菜都很配。"
  },
  {
    id: 9,
    name: "红烧肉",
    category: "荤菜",
    emoji: "🥩",
    hot: true,
    description: "想吃点满足感的时候，它总是很靠谱。"
  },
  {
    id: 10,
    name: "清炒时蔬",
    category: "素菜",
    emoji: "🥬",
    hot: false,
    description: "随机季节蔬菜，专治菜单太重口。"
  },
  {
    id: 11,
    name: "虾仁滑蛋",
    category: "荤菜",
    emoji: "🍤",
    hot: false,
    description: "口感软嫩，很适合家里大小朋友。"
  },
  {
    id: 12,
    name: "紫菜蛋花汤",
    category: "汤品",
    emoji: "🥣",
    hot: false,
    description: "简单快手，十分钟就能安排上。"
  },
  {
    id: 13,
    name: "扬州炒饭",
    category: "主食",
    emoji: "🍚",
    hot: true,
    description: "主食位的人气王，一盘很有满足感。"
  },
  {
    id: 14,
    name: "葱爆牛肉",
    category: "荤菜",
    emoji: "🥩",
    hot: false,
    description: "香气浓郁，适合想来点硬菜的时候。"
  },
  {
    id: 15,
    name: "凉拌黄瓜",
    category: "凉菜",
    emoji: "🥒",
    hot: false,
    description: "一口清爽，给整桌菜降降温。"
  },
  {
    id: 16,
    name: "麻婆豆腐",
    category: "家常",
    emoji: "🌶️",
    hot: true,
    description: "又麻又香，下饭效率非常高。"
  }
];

const categories = ["全部", ...new Set(dishes.map((dish) => dish.category))];
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
const rerollMenuBtn = document.getElementById("rerollMenuBtn");
const dishCardTemplate = document.getElementById("dishCardTemplate");
const selectedItemTemplate = document.getElementById("selectedItemTemplate");
const randomBarBtn = document.getElementById("randomBarBtn");
const barSummaryText = document.getElementById("barSummaryText");
const toast = document.getElementById("toast");

let activeCategory = "全部";
let toastTimer = null;

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
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "hot-chip";
    chip.innerHTML = `<strong>${dish.emoji} ${dish.name}</strong><span>${dish.category}</span>`;
    chip.addEventListener("click", () => {
      const alreadySelected = selectedIds.has(dish.id);
      if (alreadySelected) {
        selectedIds.delete(dish.id);
        showToast(`已从菜单移除 ${dish.name}`);
      } else {
        selectedIds.add(dish.id);
        showToast(`已加入 ${dish.name}`);
      }
      refreshAll();
    });
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
    card.querySelector(".dish-badge").textContent = dish.hot ? "HOT" : "推荐";
    card.querySelector("h3").textContent = dish.name;
    card.querySelector(".dish-category").textContent = dish.category;
    card.querySelector(".dish-desc").textContent = "";

    const addButton = card.querySelector(".add-btn");
    const cardToggle = card.querySelector(".card-toggle");
    const isSelected = selectedIds.has(dish.id);
    addButton.textContent = isSelected ? "已加入菜单" : "加入今日菜单";
    addButton.classList.toggle("selected", isSelected);
    cardToggle.textContent = isSelected ? "换一道看看" : "点我选这道";
    cardToggle.classList.toggle("selected", isSelected);

    const toggleDish = () => {
      if (selectedIds.has(dish.id)) {
        selectedIds.delete(dish.id);
        showToast(`已移除 ${dish.name}`);
      } else {
        selectedIds.add(dish.id);
        showToast(`已加入 ${dish.name}`);
      }
      refreshAll();
    };

    card.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest("button")) {
        return;
      }
      toggleDish();
    });

    cardToggle.addEventListener("click", toggleDish);
    addButton.addEventListener("click", () => {
      if (!selectedIds.has(dish.id)) {
        selectedIds.add(dish.id);
        showToast(`已加入 ${dish.name}`);
        refreshAll();
        return;
      }
      openDrawer();
    });

    dishGrid.append(card);
  });
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
  const currentCount = selectedIds.size;
  const remainingSlots = Math.max(0, requestedCount - currentCount);

  if (remainingSlots === 0) {
    showToast(`已经有 ${currentCount} 道菜了，没有覆盖原来的选择`);
    openDrawer();
    return;
  }

  const randomDishes = pickRandomDishes(Math.min(remainingSlots, dishes.length), selectedIds);

  if (randomDishes.length === 0) {
    showToast("菜库已经选满啦，没法再随机了");
    openDrawer();
    return;
  }

  randomDishes.forEach((dish) => selectedIds.add(dish.id));
  refreshAll();
  showToast(`新增了 ${randomDishes.length} 道随机菜`);
  openDrawer();
}

function rerollRandomMenu() {
  const requestedCount = Number(dishCount.value);
  const randomDishes = pickRandomDishes(Math.min(requestedCount, dishes.length));

  selectedIds.clear();
  randomDishes.forEach((dish) => selectedIds.add(dish.id));
  refreshAll();
  showToast(`重新帮你抽了 ${randomDishes.length} 道菜`);
  openDrawer();
}

function refreshAll() {
  renderDishGrid();
  renderSelectedList();
}

randomMenuBtn.addEventListener("click", generateRandomMenu);
randomBarBtn.addEventListener("click", generateRandomMenu);
menuFab.addEventListener("click", openDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);
closeDrawerBtn.addEventListener("click", closeDrawer);
rerollMenuBtn.addEventListener("click", rerollRandomMenu);

renderHotList();
renderCategoryTabs();
refreshAll();
