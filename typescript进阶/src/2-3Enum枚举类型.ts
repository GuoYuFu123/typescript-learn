// enum枚举类型

// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2,
// }

/*
 枚举类型，默认就和数组一样，默认是从0开始，一次累加;如果后一个枚举值的下标识上一个枚举的下标+1;
 可以通过=进行指定下标
*/
enum Status {
  OFFLINE,
  ONLINE = 4,
  DELETED,
}
console.log(Status.OFFLINE);
console.log(Status.ONLINE);
console.log(Status.DELETED);
// 反向查enum的值， 通过下标进行查询，没有查到就输入undefined
console.log(Status[0]);
console.log(Status[4]);
console.log(Status[5]);

function getResult(status: number) {
  if(status === Status.OFFLINE) {
    return 'offline';
  } else if(status === Status.ONLINE) {
    return 'online'
  } else if(status === Status.DELETED) {
    return 'deteled'
  }
  return 'error';
}

const result = getResult(Status.OFFLINE);
console.log(result)
