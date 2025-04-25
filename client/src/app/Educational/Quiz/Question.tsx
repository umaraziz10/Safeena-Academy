import { type Question } from './Quiz';

export const questions: Question[] = [
  {
    id: "1",
    text: "What is the primary purpose of React's virtual DOM?",
    options: [
      {
        id: "1",
        text: "To improve performance by minimizing direct manipulation of the actual DOM and batching updates efficiently"
      },
      {
        id: "2",
        text: "To provide a way to write HTML in JavaScript files"
      },
      {
        id: "3",
        text: "To enable server-side rendering of React components"
      },
      {
        id: "4",
        text: "To manage state in React applications without using hooks or Redux"
      }
    ]
  },
  {
    id: "2",
    text: "Which hook would you use to perform side effects in a React component?",
    options: [
      {
        id: "1",
        text: "useState"
      },
      {
        id: "2",
        text: "useEffect"
      },
      {
        id: "3",
        text: "useContext"
      },
      {
        id: "4",
        text: "useReducer"
      }
    ]
  },
  {
    id: "3",
    text: "What is the purpose of the key prop when rendering lists in React?",
    options: [
      {
        id: "1",
        text: "It's just a requirement that React enforces without any practical purpose"
      },
      {
        id: "2",
        text: "It helps React identify which items have changed, been added, or been removed"
      },
      {
        id: "3",
        text: "It's used to style list items differently"
      },
      {
        id: "4",
        text: "It's required for accessibility purposes when rendering lists"
      }
    ]
  },
  {
    id: "4",
    text: "What is the difference between props and state in React?",
    options: [
      {
        id: "1",
        text: "Props are internal and mutable, while state is external and immutable"
      },
      {
        id: "2",
        text: "There is no difference, they can be used interchangeably"
      },
      {
        id: "3",
        text: "Props are read-only and passed from parent to child, while state is mutable and managed within a component"
      },
      {
        id: "4",
        text: "State is global, while props are component-specific"
      }
    ]
  },
  {
    id: "5",
    text: "Which method would you use to prevent unnecessary re-renders in React?",
    options: [
      {
        id: "1",
        text: "useEffect"
      },
      {
        id: "2",
        text: "useState"
      },
      {
        id: "3",
        text: "useMemo"
      },
      {
        id: "4",
        text: "useContext"
      }
    ]
  }
];