const main = require('../main/main');

describe('guess_number', function() {
    it('全对', function()
    {
        let guess_number='1234'
        let result = main(guess_number);
        expect(result).toEqual('4A0B');
    })

    it('错，数字不同', function()
    {
        let guess_number='5678'
        let result = main(guess_number);
        expect(result).toEqual('0A0B');
    })

    it('错，顺序不同', function()
    {
        let guess_number='4213'
        let result = main(guess_number);
        expect(result).toEqual('1A3B');
    })

    it('错，部分数字同，部分顺序同', function()
    {
        let guess_number='1563'
        let result = main(guess_number);
        expect(result).toEqual('1A1B');
    })

    it('非法输入,重复数字', function()
    {
        let guess_number='1134'
        let result = main(guess_number);
        expect(result).toEqual('非法输入');
    })

    it('非法输入,非四位数', function()
    {
        let guess_number='12345'
        let result = main(guess_number);
        expect(result).toEqual('非法输入');
    })

    it('非法输入,非数字字符', function()
    {
        let guess_number='1a23'
        let result = main(guess_number);
        expect(result).toEqual('非法输入');
    })
});