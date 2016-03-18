function Person (name){
  this.name = name;
  var a = 0;
}
Person.prototype.showname = function () {
  alert("我的名字是"+this.name);
}
// Person.prototype.count = function () {
//   this.a = this.a + 1;
//   alert(this.a);
// }
var yue = new Person("yue");
var qiu = new Person("qiu");
yue.showname();//返回name属性
qiu.showname();//返回name属性
// yue.count();






function Complex(re,im) {
  if ( isNaN(re) )
    throw new TypeError();
  else  
    this.r = re;
  if(isNaN(im))
  	throw new TypeError();
  else
    this.i = im;
}
Complex.prototype.mul = function (another) {
  return new Complex(this.r*another.r - this.i*another.i, this.r*another.i + this.i*another.r);
};//两个复数相乘
Complex.prototype.add = function (another) {
  return new Complex(this.r + another.r, this.i + another.i);
};//两个复数相加
Complex.prototype.mag = function () {
  return Math.sqrt(this.r*this.r + this.i*this.i);
};//求模值
Complex.prototype.neg = function () {
  return new Complex( -this.r, -this.i );
};//求反
Complex.prototype.equals = function (another) {
  if( another != null && this.r === another.r && this.i === another.i)
  	return true;
  else
  	return false;
};//比较两复数是否相等
Complex.prototype.toString = function () {
  alert( this.r + "+" + this.i + "i"+"这个复数的实部为" + this.r + "虚部为" + this.i)
}
var cp1 = new Complex(1,4);
var cp2 = new Complex(2,3);
cp1.mul(cp2);
cp1.add(cp2);
cp1.mag();
cp1.neg();
cp1.equals(cp2);
cp1.toString();
















