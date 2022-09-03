export default function CalendarDetail({date, setDate}) {
    return (
        <div>
            <hr />
            <h3 className="cal-detail-title">{date.toLocaleDateString()}</h3>
        </div>
        
    );
  }