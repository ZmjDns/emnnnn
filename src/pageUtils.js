export function getUrlEntry (name) {
    console.log('name',name)
    let arr = weex.config.bundleUrl.split('/')
    console.log('arr',arr)

    if(weex.config.env.platform === 'Web'){
        return './' + name + '.html'
    }else {
        arr.pop()
        console.log('arr.pop',arr)
        arr.push(name + ".js")
        console.log('newArr',arr)
        return arr.join('/')
    }
}