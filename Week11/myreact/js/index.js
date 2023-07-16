//вывод 1 тега через реакт, render - выводить (what?, where?)
ReactDOM.render(<h1>Hey</h1>, document.getElementById('app'))
//вывод нескольких тегов
ReactDOM.render(<div>
    <h1>Hey</h1>
    <h2>Hello</h2>
</div>, document.getElementById('app'))