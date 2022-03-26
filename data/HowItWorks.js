import Create from "../public/Images/assests/create.svg";
import SaveGoal from "../public/Images/assests/Save-goal.svg";
import Save from "../public/Images/assests/start-saving.svg";
import GrowSavings from "../public/Images/assests/money-grow.svg";

export const HowItWork = [
    {
        id: 1,
        icon: "icon",
        title: "Create an Account'",
        description: "Sign up on Kolopay here using your fullname, number, email address and password",
        image: Create,
    },
    {
        id: 2,
        icon: "icon",
        title: "Setup Saving Goals",
        description: "Create your goal(s) with a name, amount you want to save and set a withdrawal date",
        image: SaveGoal,
    },
    {
        id: 3,
        icon: "icon",
        title: "Start Saving",
        description: "Link your debit card to your saving goal and start saving money immediately",
        image: Save,
    },
    {
        id: 4,
        icon: "icon",
        title: "Grow Your Savings",
        description: "Enjoy up to 10% interest on your savings while using KoloPay",
        image: GrowSavings,
    }
] 

export default HowItWork;