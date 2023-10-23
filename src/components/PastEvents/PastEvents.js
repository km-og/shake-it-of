import PastEvent from "../PastEvent/PastEvent";
import { eventsInfo } from "../utils/constants";

function PastEvents() {
  return (
    <div className="past-events">
      {/* <h2 className="past-events__title">Предыдущие мероприятия</h2> */}
      <ul className="past-events__list">
        {eventsInfo.map((item) => (
          <PastEvent
            date={item.date}
            title={item.title}
            img={item.img}
            textBriefly={item.textBriefly}
            link={item.link}
            // textDetailed={item.textDetailed}
          />
        ))}
      </ul>
    </div>
  );
}

export default PastEvents;
