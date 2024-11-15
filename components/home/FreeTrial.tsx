// Component Import
import { Button } from '../ui/button'

const FreeTrial = () => {
  return (
    <div className="wrapper w-full flex flex-col items-center gap-y-12 my-24">
      <h5 className="font-gotham text-4xl font-bold">
        Take the Next Step with <span className="text-gradient">Purple Box</span>
      </h5>
      <div className="flex items-center justify-center gap-x-4 font-gotham">
        {/* Get Started Button */}
        <Button
          variant={"default"}
          className="px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-lg transition duration-300 hover:from-purple-600 hover:to-purple-800 hover:scale-105 transform"
        >
          Get Started
        </Button>

        {/* Schedule a Demo Button */}
        <Button
          variant={"outline"}
          className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg transition duration-300 hover:bg-purple-400 hover:text-white hover:scale-105 transform"
        >
          Schedule A Demo
        </Button>

        {/* Learn More Button */}
        <Button
          variant={"secondary"}
          className="px-6 py-3 text-purple-500 bg-purple-100 rounded-lg transition duration-300 hover:bg-purple-200 hover:scale-105 transform"
        >
          Learn More
        </Button>
      </div>
    </div>
  )
}

export default FreeTrial