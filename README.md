###### tags: `網頁切版直播班 - 2021 夏季班`
# 第六週：work

[設計稿](https://xd.adobe.com/view/057f9d4e-6781-43fe-9aea-9f73f67dd2fd-502c/)

[Material Icon](https://fonts.google.com/icons?selected=Material+Icons)

### Layout

![](https://i.imgur.com/FCQyxAw.png)


### Color

```sass=
$primary: #630834 !default; //深棕
$secondary: #E31277 !default; // 粉紅
$light: #EFEFEF !default; //淺灰
$dark: #707070 !default //灰色
$white: #fff //白
$black: #000 //黑
```

### Font-size

### Spacing

### Components

### #Card

border-width: 0,

border-radius: 0

> container > row > col

> 建議跟從bs5一樣的思考模式，min-width 從小到大

- offset (推幾格的意思) ex offset-md-1
- swiper
- offcanvas
- custom bar [https://codepen.io/YuWin0805/pen/ZEKmggw](https://codepen.io/YuWin0805/pen/ZEKmggw)

---

- [ ] popular card 要做平板樣式、fb icon hover

- [ ] popular、like  `.card-img`

- [ ] product card 要做平板樣式 hover怪怪的 圖片會放大(`.popular-img`)

- [ ] detail 平板樣式

- [ ] cart-img

- [ ] custom scrollbar

- [ ] 加上網址

```javascript=
// handle routing
function onHashChange() {
        const visibility = window.location.hash.replace(/#\/?/, '');
        if (filters[visibility]) {
          vm.visibility = visibility;
        } else {
          window.location.hash = '';
          vm.visibility = 'all';
        }
      }

      window.addEventListener('hashchange', onHashChange);
      onHashChange();
```

---

## 每日任務

- 8/9

    講義：[https://hackmd.io/Iaxc756ESRCNtOizGtbdtQ](https://hackmd.io/Iaxc756ESRCNtOizGtbdtQ)

    codepen：[https://codepen.io/hsiungchi/pen/wvdRqgW](https://codepen.io/hsiungchi/pen/wvdRqgW)

- 8/10

    講義：[https://hackmd.io/nQJgghTvTUuJ8GdgB0kIbw?both](https://hackmd.io/nQJgghTvTUuJ8GdgB0kIbw?both)

    codepen：[https://codepen.io/hsiungchi/pen/xxdmLVa](https://codepen.io/hsiungchi/pen/xxdmLVa)

- 8/11

    講義：[https://hackmd.io/I2QjrCOaQYqZG9W_Df3eWg](https://hackmd.io/I2QjrCOaQYqZG9W_Df3eWg)

    codepen：[https://codepen.io/hsiungchi/pen/OJmdMwX](https://codepen.io/hsiungchi/pen/OJmdMwX)

- 8/12

    講義：[https://hackmd.io/UnMYnBtzS0msPCKZr6UCqA](https://hackmd.io/UnMYnBtzS0msPCKZr6UCqA)

    codepen：[https://codepen.io/hsiungchi/pen/gOWEXNQ](https://codepen.io/hsiungchi/pen/gOWEXNQ)

- 8/13

    講義：[https://hackmd.io/KJ3tCwZNTq2VkmelntkthA](https://hackmd.io/KJ3tCwZNTq2VkmelntkthA)

    codepen：[https://codepen.io/hsiungchi/pen/xxdBPyq](https://codepen.io/hsiungchi/pen/xxdBPyq)