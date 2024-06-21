import LandingPage from "./components/LandingPage";
import Item from "./components/Item";
import grow from './images/illustration-grow-together.svg';
import flowing from './images/illustration-flowing-conversation.svg';
import users from './images/illustration-your-users.svg';
import ReadyToBuild from "./components/ReadyToBuild";
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="App">
        <div className="background"></div>
        <LandingPage />
        <div className="sections">
          <Item 
            title="Grow Together"
            description="Generate meaningful discussions with your audience and build a strong, loyal community. 
                        Think of the insightful conversations you miss out on with a feedback form. "
            image={grow}
            />
          <Item 
            title="Flowing Conversations"
            description="You wouldn't paginate a conversation in real life, so why do it online? Our threads 
                        have just-in-time loading for a more natural flow."
            image={flowing}
            direction="row-reverse"
            />
          <Item 
            title="Your Users"
            description="It takes no time at all to integrate Huddle with your app's authentication solution. 
                        This means, once signed in to your app, your users can start chatting immediately."
            image={users}
            />
          <ReadyToBuild />
        </div>
    </div>
    <div className="footer">
      <Footer />
    </div>
    </>
  );
}

export default App;
