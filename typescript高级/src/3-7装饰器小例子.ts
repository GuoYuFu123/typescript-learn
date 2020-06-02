const userInfo: any = undefined;

function catchError(msg: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor){
        const fn = descriptor.value;
        descriptor.value = function(){
            try {
                fn();
            } catch (error) {
                console.log(`${msg}`)
            }
        }
    }
}

// function catchError(target: any, key: string, descriptor: PropertyDescriptor){
//     const fn = descriptor.value;
//     console.log(descriptor);
//     descriptor.value = function(){
//         try {
//             fn();
//         } catch (error) {
//             console.log(' error')
//         }
//     }
// }

class Test7{
    @catchError('userInfo.name 不存在')
    getName() {
       return userInfo.name;
    }
    getAge() {
        try {
            return userInfo.age;
        } catch (error) {
            console.log('userInfo.age')
        }
    }
}

const test7 = new Test7();
test7.getName();