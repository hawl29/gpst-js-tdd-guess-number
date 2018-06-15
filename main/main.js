// Write your cade below:
function main(guess_number)
{
    var right_number='1234';
    var result=[0,0];
    var patten=/^(?!\d*?(\d)\d*?\1)\d{4}$/;
    if(patten.test(guess_number))          //判断字符串是4位无重复数字
    {
      for(let i=0;i<right_number.length;i++)    //外层循环遍历系统给出的答案
      {
        for(let j=0;j<guess_number.length;j++)  //内层循环遍历用户猜测的数字
        {
            if(right_number[i]===guess_number[i])   //对应位置数字相同则记为A
            {
                result[0]++;
                break;
            }
            else if(right_number[i]===guess_number[j])   //数字相同但位置不同则记为B
            {
                result[1]++;
                break;
            }
        }
      }
      return result[0]+'A'+result[1]+'B';
    }
    else return '非法输入';
};


module.exports = main;