Mobx是什么？
它就是简单的、可扩展的状态管理。


主要概念有哪些？

actions：一些改变状态值（state）的动作。
state：可观察的状态值
computed value：根据state，用pure function计算出来的值
reactions：因state或computed value变化而引起的反应，主要指视图UI重新渲染
