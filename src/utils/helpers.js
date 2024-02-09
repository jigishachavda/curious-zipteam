export const removeTags = htmlString => {
  if (typeof window !== 'undefined') {
    const div = document.createElement("div")
    div.innerHTML = htmlString
    return div.textContent || div.innerText || ""
  }

  return "";
}

export const setInitialState = () => {
  if (typeof window !== 'undefined') {
    let state = window.localStorage.getItem('my_state') ? JSON.parse(window.localStorage.getItem('my_state')) : window.history.state;
    if (state) {
      window.history.pushState(state, '')
    }
    setTimeout(() => {
      window.localStorage.removeItem('my_state');
    }, 2000);
    return state;
  }

  return null
}

export const redirectToTop = () => {
  
}



export const copyElementWithEvents = (originalElementSelector) => {
  if (typeof window !== 'undefined') { 
      // Step 1: Get the reference to the element you want to copy
      var original = document.querySelector(originalElementSelector);
    
      if (!original) {
          console.error('Element not found');
          return;
      }
    
      // Step 2: Create a new element to serve as a copy
      var copy = document.createElement(original.tagName);
    
      // Step 3: Copy attributes and content
      for (var i = 0; i < original.attributes.length; i++) {
          copy.setAttribute(
              original.attributes[i].name,
              original.attributes[i].value
          );
      }
      copy.innerHTML = original.innerHTML;
    
      // Step 4: Copy event listeners
      var events = window.getEventListeners(original);
      for (var eventType in events) {
          events[eventType].forEach(function (event) {
              copy.addEventListener(eventType, event.listener, event.options);
          });
      }
    
      return copy;
  }

  return null;
}