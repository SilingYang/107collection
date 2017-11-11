'use strict';
var even_group_calculate_average = function(collection){
    let temp=[];//抽取第偶数个位置的数
    let temp1=[];//抽取temp中的偶数
    let result=[];//存放结果
    for(let i=1;i<collection.length;i+=2)//抽取第偶数个位置的数
    {
        temp.push(collection[i]);
    }
    for(let i=0;i<temp.length;i++)//抽取temp中的偶数
    {
        if(temp[i]%2==0)
        {
            temp1.push(temp[i]);
        }
    }
    if(temp1.length==0)
    {
        result[0]=0;
    }
    else
    {
        let arr1=[];
        let arr2=[];
        let arr3=[];
        for(let j=0;j<temp1.length;j++)
        {
            let len=temp1[j].toString().length;
            if(len==1){
                arr1.push(temp1[j]);
            }
            else if(len==2)
            {
                arr2.push(temp1[j]);
            }
            else if(len==3)
            {
                arr3.push(temp[j]);
            }
        }
        if((arr1.length==0)&&(arr2.length==0)&&(arr3.length!=0))
        {
            let aver=0;
            for(let i=0;i<arr3.length;i++)
            {
                aver+=arr3[i];
            }
            result[0]=aver/arr3.length;
        }
        else
        {
                let aver1=0;
                let aver2=0;
                let aver3=0;
                for(let i=0;i<arr1.length;i++)
                {
                    aver1+=arr1[i];
                }
                for(let i=0;i<arr2.length;i++)
                {
                    aver2+=arr2[i];
                }
                for(let i=0;i<arr3.length;i++)
                {
                    aver3+=arr3[i];
                }
                result[0]=aver1/arr1.length;
                result[1]=aver2/arr2.length;
                result[2]=aver2/arr2.length;
        }//else
    
    }
    return result;
};
module.exports = even_group_calculate_average;
