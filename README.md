## 📘 [This is a ReadMe File]
 ---

## ❓ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **getElementById** → Selects one element by its `id`.  
- **getElementsByClassName** → Selects all elements with a class (returns HTMLCollection).  
- **querySelector** → Selects the **first** element that matches a CSS selector.  
- **querySelectorAll** → Selects **all** matching elements (returns NodeList).

---

## ❓ How do you create and insert a new element into the DOM?

```js
let div = document.createElement("div");
div.textContent = "Hello This is Text!";
document.body.appendChild(div);
```
---
## ❓ What is Event Bubbling and how does it work?

- Event goes from the **target element → up to parents → document**.  
- Example: Clicking a button also triggers its parent’s click handler.

---

## ❓ What is Event Bubbling and how does it work?

- Event goes from the **target element → up to parents → document** (bubbling phase).  
- Event propagation has **two phases**:  
  1. **Capturing phase** – Event travels **from the document down to the target element**.  
  2. **Bubbling phase** – Event travels **from the target element up to the document**.  
- Most events bubble by default (`click`, `keyup`).  
- Example: Clicking a button also triggers its parent’s click handler.  
- Useful for **event delegation**, where a single parent can handle events from multiple child elements.  
- Bubbling can be stopped using `event.stopPropagation()`.

---

## ❓ What is Event Delegation in JavaScript? Why is it useful?

- Attach **one event listener to a parent** instead of many children.  
- Works because of **event bubbling**.  
- Useful for dynamic elements and improves performance.

---

## ❓ What is the difference between preventDefault() and stopPropagation()?

- **preventDefault()** → Stops the default browser action (prevent form submit, block link navigation).  
- **stopPropagation()** → Stops the event from bubbling/capturing further.


