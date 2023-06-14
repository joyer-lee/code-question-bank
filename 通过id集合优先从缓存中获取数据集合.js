/*
* 写一个通用的工具类，通过id集合
* 获取相应数据的集合；要求先从缓存中查询，未查到的情况下再调用另一个服务查询并做缓存，最后返回数据集合
*/
const api = {
  getDataById: (id) => {
    return 'dataFromService';
  },
};

class dataFetch {
  constructor() {
    this.cache = new Map();
  }
  getDataList(idList) {
    const dataList = [];
    idList.forEach((id) => {
      if (this.cache.has(id)) {
        dataList.push(this.cache.get(id));
      } else {
        const data = api.getDataById(id);
        if (data) {
          this.cache.set(id, data);
          dataList.push(data);
        }
      }
    });
  }
}
