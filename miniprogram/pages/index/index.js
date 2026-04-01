const dishes = require('../../utils/dishes.js');

Page({
  data: {
    categories: ['全部', '肉菜', '鱼虾海鲜', '素菜', '凉菜小菜', '主食'],
    activeCategory: '全部',
    dishes: [],
    hotDishes: [],
    visibleDishes: [],
    selectedIds: [],
    selectedCount: 0,
    selectedList: [],
    dishCountIndex: 2,
    dishCountOptions: ['1 道', '2 道', '3 道', '4 道', '5 道', '6 道'],
    generatedDishes: [],
    showGenerated: false,
    showDrawer: false,
    showToast: false,
    toastMessage: ''
  },

  onLoad() {
    const hotDishes = dishes.filter(d => d.hot).slice(0, 6);
    this.setData({
      dishes: dishes,
      hotDishes: hotDishes,
      visibleDishes: dishes
    });
  },

  // 切换分类
  onCategoryTap(e) {
    const category = e.currentTarget.dataset.category;
    const visibleDishes = category === '全部' 
      ? this.data.dishes 
      : this.data.dishes.filter(d => d.category === category);
    
    this.setData({
      activeCategory: category,
      visibleDishes: visibleDishes
    });
  },

  // 选择菜品数量
  onDishCountChange(e) {
    this.setData({
      dishCountIndex: e.detail.value
    });
  },

  // 随机生成菜单
  onRandomMenuTap() {
    const count = parseInt(this.data.dishCountIndex) + 1;
    const availableDishes = this.data.dishes.filter(d => 
      !this.data.generatedDishes.find(g => g.id === d.id)
    );
    
    // 随机打乱
    const shuffled = availableDishes.sort(() => Math.random() - 0.5);
    const generatedDishes = shuffled.slice(0, count);
    
    if (generatedDishes.length === 0) {
      this.showToast('没有新的候选菜可以生成了');
      return;
    }
    
    this.setData({
      generatedDishes: generatedDishes,
      showGenerated: true
    });
    
    this.showToast(`生成了 ${generatedDishes.length} 道候选菜`);
  },

  // 添加/移除菜品
  toggleDish(e) {
    const dishId = e.currentTarget.dataset.id;
    const dish = this.data.dishes.find(d => d.id === dishId);
    
    let selectedIds = [...this.data.selectedIds];
    const index = selectedIds.indexOf(dishId);
    
    if (index > -1) {
      selectedIds.splice(index, 1);
      this.showToast(`已移除 ${dish.name}`);
    } else {
      selectedIds.push(dishId);
      this.showToast(`已加入 ${dish.name}`);
    }
    
    this.updateSelectedList(selectedIds);
  },

  // 从抽屉中移除菜品
  removeFromMenu(e) {
    const dishId = e.currentTarget.dataset.id;
    let selectedIds = [...this.data.selectedIds];
    const index = selectedIds.indexOf(dishId);
    
    if (index > -1) {
      selectedIds.splice(index, 1);
      this.updateSelectedList(selectedIds);
    }
  },

  // 更新选中列表
  updateSelectedList(selectedIds) {
    const selectedList = selectedIds.map(id => this.data.dishes.find(d => d.id === id)).filter(Boolean);
    
    this.setData({
      selectedIds: selectedIds,
      selectedCount: selectedIds.length,
      selectedList: selectedList
    });
  },

  // 打开抽屉
  openDrawer() {
    this.setData({ showDrawer: true });
  },

  // 关闭抽屉
  closeDrawer() {
    this.setData({ showDrawer: false });
  },

  // 点击遮罩关闭
  onMaskTap() {
    this.closeDrawer();
  },

  // 显示 Toast
  showToast(message) {
    this.setData({
      toastMessage: message,
      showToast: true
    });
    
    setTimeout(() => {
      this.setData({ showToast: false });
    }, 1800);
  }
});
