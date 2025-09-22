import SplitText from "@/components/showcase/split-text";

export default function page() {
  return (
    <div className="min-h-screen p-8 space-y-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Fade Up Animation */}
        <div className="text-center space-y-4">
          <h3 className="text-sm text-gray-600 uppercase tracking-wide">
            Fade Up
          </h3>
          <SplitText
            text="Beautiful Text Animation"
            animation="fadeUp"
            className="text-4xl font-bold"
            staggerDelay={0.05}
          />
        </div>

        {/* Slide Left Animation */}
        <div className="text-center space-y-4">
          <h3 className="text-sm text-gray-600 uppercase tracking-wide">
            Slide Left
          </h3>
          <SplitText
            text="Smooth Sliding Effect"
            animation="slideLeft"
            className="text-3xl font-semibold"
            delay={0.3}
            staggerDelay={0.04}
          />
        </div>

        {/* Scale Animation */}
        <div className="text-center space-y-4">
          <h3 className="text-sm text-gray-600 uppercase tracking-wide">
            Scale
          </h3>
          <SplitText
            text="Growing Into View"
            animation="scale"
            className="text-3xl font-semibold"
            delay={0.6}
            staggerDelay={0.06}
          />
        </div>

        {/* Blur Animation */}
        <div className="text-center space-y-4">
          <h3 className="text-sm text-gray-600 uppercase tracking-wide">
            Blur Focus
          </h3>
          <SplitText
            text="Coming Into Focus"
            animation="blur"
            className="text-3xl font-semibold"
            delay={0.9}
            staggerDelay={0.08}
          />
        </div>

        {/* Word Animation */}
        <div className="text-center space-y-4">
          <h3 className="text-sm text-gray-600 uppercase tracking-wide">
            Word by Word
          </h3>
          <SplitText
            text="Each word appears separately"
            animation="fadeUp"
            by="word"
            className="text-2xl font-medium"
            delay={1.2}
            staggerDelay={0.15}
          />
        </div>

        {/* Rotate Animation */}
        <div className="text-center space-y-4">
          <h3 className="text-sm text-gray-600 uppercase tracking-wide">
            Rotate
          </h3>
          <SplitText
            text="Spinning Letters"
            animation="rotate"
            className="text-3xl font-semibold"
            delay={1.5}
            staggerDelay={0.05}
          />
        </div>

        {/* Slide Right Animation */}
        <div className="text-center space-y-4">
          <h3 className="text-sm text-gray-600 uppercase tracking-wide">
            Slide Right
          </h3>
          <SplitText
            text="Right to Left Motion"
            animation="slideRight"
            className="text-3xl font-semibold"
            delay={1.8}
            staggerDelay={0.04}
          />
        </div>

        {/* Fade Down Animation */}
        <div className="text-center space-y-4">
          <h3 className="text-sm text-gray-600 uppercase tracking-wide">
            Fade Down
          </h3>
          <SplitText
            text="Dropping Down Softly"
            animation="fadeDown"
            className="text-3xl font-semibold"
            delay={2.1}
            staggerDelay={0.05}
          />
        </div>
      </div>
    </div>
  );
}
