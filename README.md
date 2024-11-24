Here's a tailored README file for your project based on your requirements:

---

# React Practical Day 07: Parent-Child Communication  
**Index Number:** 2020/ICT/68  

This React practical demonstrates parent-to-child and child-to-parent communication using **props** and **state** in a functional component setup.  

---

## **Project Overview**  
This project showcases effective communication between parent and child components using React's state and props.  

### **Files**  
- **App.js**:  
  Contains the parent component responsible for managing state and passing a callback function to the child component.  
- **Childcom.js**:  
  Represents the child component, which utilizes the parent's callback to send data back.  

---

## **Key Concepts Covered**  
1. **State Management**:  
   Utilizing the `useState` hook to manage and update the parent's state dynamically.  
2. **Props**:  
   Transmitting data and functions between parent and child components for seamless communication.  
3. **Callback Functions**:  
   Facilitating child-to-parent communication by using callback functions passed as props.  

---

## **How It Works**  

### **Parent Component (App.js)**  
- **State Variable**:  
  Defines a state variable `childname` to store the data sent by the child.  
- **Callback Function**:  
  Implements a function `receiveName` that updates the `childname` state with the message sent by the child component.  

### **Child Component (Childcom.js)**  
- **Receiving Props**:  
  Accepts the callback function from the parent as a prop.  
- **Sending Data**:  
  Uses the parent's callback function to send a message (`"My Name is Bob"`) back to the parent.  

### **Dynamic Update**  
The parent component listens for updates from the child and dynamically displays the received message.  

---

## **Usage Instructions**  

1. Clone this repository:  
   ```bash
   git clone <https://github.com/SanchithaSamarasinghe/practicle_D7.git>
   ```  
2. Navigate to the project directory:  
   ```bash
   cd react-practical-day-07
   ```  
3. Install dependencies:  
   ```bash
   npm install
   ```  
4. Start the development server:  
   ```bash
   npm start
   ```  

---

## **Example Output**  

**Parent Component (App.js):**  
- Displays the message sent from the child component dynamically on the UI.

**Child Component (Childcom.js):**  
- Sends the predefined message to the parent component upon an action (e.g., a button click).

---

### **Contributors**  
- **2020/ICT/68**

