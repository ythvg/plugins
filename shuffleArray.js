Array.prototype.shuffle = function () {
    var len = this.length;
    var arr = new Array(len);

    for (var i = 0; i < len; i++) {
        function pushArr(obj) {
            var ran = Math.floor(Math.random() * len);
            console.log(ran)
            if (arr[ran] === undefined) {
                arr[ran] = obj[i];
            } else {
                pushArr(obj);
            }
        }
        pushArr(this);
    }
    return arr;
}


console.log([1,2,3,4,5,6,7,8,9].shuffle())