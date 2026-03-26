const dishes = [
  { id: 1, name: "可乐鸡翅", category: "荤菜", emoji: "🍗", hot: true, description: "甜咸刚好，超级下饭。" },
  { id: 2, name: "番茄炒蛋", category: "家常", emoji: "🍅", hot: true, description: "经典家常菜，稳妥不出错。" },
  { id: 3, name: "蒜蓉西兰花", category: "素菜", emoji: "🥦", hot: false, description: "清爽解腻，给菜单一点平衡。" },
  { id: 4, name: "玉米排骨汤", category: "汤品", emoji: "🍲", hot: true, description: "一碗热汤，氛围立刻到位。" },
  { id: 5, name: "宫保鸡丁", category: "荤菜", emoji: "🥢", hot: true, description: "微辣带甜，米饭杀手。" },
  { id: 6, name: "地三鲜", category: "素菜", emoji: "🍆", hot: false, description: "土豆茄子青椒一起上，很香。" },
  { id: 7, name: "香煎豆腐", category: "素菜", emoji: "🧈", hot: false, description: "外焦里嫩，轻负担选择。" },
  { id: 8, name: "酸辣土豆丝", category: "素菜", emoji: "🥔", hot: true, description: "脆爽开胃，和任何主菜都搭。" },
  { id: 9, name: "红烧肉", category: "荤菜", emoji: "🥩", hot: true, description: "满足感很强的硬菜选手。" },
  { id: 10, name: "清炒时蔬", category: "素菜", emoji: "🥬", hot: false, description: "太重口的时候靠它救场。" },
  { id: 11, name: "虾仁滑蛋", category: "荤菜", emoji: "🍤", hot: false, description: "口感软嫩，家里都能吃。" },
  { id: 12, name: "紫菜蛋花汤", category: "汤品", emoji: "🥣", hot: false, description: "快手汤品，十分钟能上桌。" },
  { id: 13, name: "扬州炒饭", category: "主食", emoji: "🍚", hot: true, description: "主食位人气王。" },
  { id: 14, name: "葱爆牛肉", category: "荤菜", emoji: "🥩", hot: false, description: "香气浓郁，适合想吃硬菜时。" },
  { id: 15, name: "凉拌黄瓜", category: "凉菜", emoji: "🥒", hot: false, description: "清清爽爽，给整桌菜降温。" },
  { id: 16, name: "麻婆豆腐", category: "家常", emoji: "🌶️", hot: true, description: "又麻又香，下饭效率很高。" }
];

const categories = ["全部", ...new Set(dishes.map((dish) => dish.category))];
const selectedIds = new Set();

const hotList = document.getElementById("hotList");
const dishGrid = document.getElementById("dishGrid");
const categoryTabs = document.getElementById("categoryTabs");
const selectedCount = document.getElementById("selectedCount");
const barSummaryText = document.getElementById("barSummaryText");
const drawerCountText = document.getElementById("drawerCountText");
const selectedList = document.getElementById("selectedList");
const dishCount = document.getElementById("dishCount");
const randomMenuBtn = document.getElementById("randomMenuBtn");
const randomBarBtn = document.getElementById("randomBarBtn");
const menuFab = document.getElementById("menuFab");
const openMenuBtn = document.getElementById("openMenuBtn");
const menuDrawer = document.getElementById("menuDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");
const rerollMenuBtn = document.getElementById("rerollMenuBtn");
const dishCardTemplate = document.getElementById("dishCardTemplate");
const selectedItemTemplate = document.getElementById("selectedItemTemplate");
const toast = document.getElementById("toast");
const dishCountLabel = document.getElementById("dishCountLabel");

let activeCategory = "全部";
let toastTimer = null;

function shuffle(list) {
  const result = [...list];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}

function getSelectedDishes() {
  return dishes.filter((dish) => selectedIds.has(dish.id));
}

function pickRandomDishes(count, excludedIds = new Set()) {
  return shuffle(dishes.filter((dish) => !excludedIds.has(dish.id))).slice(0, Math.max(0, count));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1700);
}

function updateSummary() {
  const count = selectedIds.size;
  selectedCount.textContent = String(count);
  barSummaryText.textContent = count > 0 ? `已选 ${count} 道` : "还没选菜";
  drawerCountText.textContent = count > 0 ? `已选 ${count} 道菜，继续调整也很方便。` : "还没选菜，先去列表里点几个。";
}

function openDrawer() {
  menuDrawer.classList.add("open");
  menuDrawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  menuDrawer.classList.remove("open");
  menuDrawer.setAttribute("aria-hidden", "true");
}

function refreshSelectedList() {
  const currentSelected = getSelectedDishes();
  selectedList.innerHTML = "";

  if (currentSelected.length === 0) {
    const emptyState = document.createElement("li");
    emptyState.className = "selected-item";
    emptyState.innerHTML = "<div><strong>菜单空空</strong><p>去挑菜区点几道，或者先用随机补齐。</p></div>";
    selectedList.append(emptyState);
    updateSummary();
    return;
  }

  currentSelected.forEach((dish) => {
    const item = selectedItemTemplate.content.firstElementChild.cloneNode(true);
    item.querySelector("strong").textContent = dish.name;
    item.querySelector("p").textContent = `${dish.category} · ${dish.description}`;
    item.querySelector(".remove-btn").addEventListener("click", () => {
      selectedIds.delete(dish.id);
      refreshAll();
      showToast(`已移除 ${dish.name}`);
    });
    selectedList.append(item);
  });

  updateSummary();
}

function renderHotList() {
  hotList.innerHTML = "";

  dishes
    .filter((dish) => dish.hot)
    .slice(0, 8)
    .forEach((dish) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "hot-chip";
      chip.innerHTML = `<strong>${dish.emoji} ${dish.name}</strong><span>${dish.category}</span>`;
      chip.addEventListener("click", () => toggleDish(dish));
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
      renderDishList();
    });
    categoryTabs.append(button);
  });
}

function toggleDish(dish) {
  if (selectedIds.has(dish.id)) {
    selectedIds.delete(dish.id);
    showToast(`已移除 ${dish.name}`);
  } else {
    selectedIds.add(dish.id);
    showToast(`已加入 ${dish.name}`);
  }

  refreshAll();
}

function renderDishList() {
  const visibleDishes =
    activeCategory === "全部" ? dishes : dishes.filter((dish) => dish.category === activeCategory);

  dishGrid.innerHTML = "";
  dishCountLabel.textContent = activeCategory === "全部" ? `共 ${dishes.length} 道菜` : `${activeCategory} ${visibleDishes.length} 道`;

  visibleDishes.forEach((dish) => {
    const row = dishCardTemplate.content.firstElementChild.cloneNode(true);
    const isSelected = selectedIds.has(dish.id);

    row.classList.toggle("selected", isSelected);
    row.querySelector(".dish-emoji").textContent = dish.emoji;
    row.querySelector(".dish-name").textContent = dish.name;
    row.querySelector(".dish-meta").textContent = dish.hot ? `${dish.category} · HOT` : dish.category;
    row.querySelector(".dish-desc").textContent = dish.description;
    row.querySelector(".dish-state").textContent = isSelected ? "已选" : "选择";
    row.addEventListener("click", () => toggleDish(dish));

    dishGrid.append(row);
  });
}

function generateRandomMenu() {
  const requestedCount = Number(dishCount.value);
  const remainingSlots = Math.max(0, requestedCount - selectedIds.size);

  if (remainingSlots === 0) {
    showToast(`已经有 ${selectedIds.size} 道菜了，没有覆盖已有选择`);
    openDrawer();
    return;
  }

  const randomDishes = pickRandomDishes(remainingSlots, selectedIds);

  if (randomDishes.length === 0) {
    showToast("没有可补的菜了");
    openDrawer();
    return;
  }

  randomDishes.forEach((dish) => selectedIds.add(dish.id));
  refreshAll();
  showToast(`随机补进 ${randomDishes.length} 道菜`);
  openDrawer();
}

function rerollRandomMenu() {
  const requestedCount = Number(dishCount.value);
  const randomDishes = pickRandomDishes(Math.min(requestedCount, dishes.length));

  selectedIds.clear();
  randomDishes.forEach((dish) => selectedIds.add(dish.id));
  refreshAll();
  showToast(`重新随机了 ${randomDishes.length} 道菜`);
}

function refreshAll() {
  renderDishList();
  refreshSelectedList();
}

randomMenuBtn.addEventListener("click", generateRandomMenu);
randomBarBtn.addEventListener("click", generateRandomMenu);
menuFab.addEventListener("click", openDrawer);
openMenuBtn.addEventListener("click", openDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);
closeDrawerBtn.addEventListener("click", closeDrawer);
rerollMenuBtn.addEventListener("click", rerollRandomMenu);

renderHotList();
renderCategoryTabs();
refreshAll();
