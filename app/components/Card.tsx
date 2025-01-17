import { dummyTexts } from "../models/dummyTexts"

const Card = () => {
    return (
      <div className="grid grid-cols-4 bg-slate-200 h-72 place-items-center">
        {dummyTexts.map((text, index) => (
          <div
            key={index}
            className="flex flex-col space-y-2 bg-white overflow-hidden rounded shadow-md max-w-xs h-28 p-2"
          >
            <h6 className="text-xs font-bold">{text.author}</h6>
            <h6 className="text-xs italic">{text.title}</h6>
            <p className="text-xs">{text.lines}</p>
          </div>
        ))}
      </div>
    )
}

export default Card
