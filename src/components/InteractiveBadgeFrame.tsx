/**
 * InteractiveBadgeFrame - Embeds the 3D event badge from the deployed Vercel app
 * 
 * This component renders an iframe pointing to the deployed badge application.
 * The badge appears as a fixed-size, responsive container that maintains
 * the exact behavior and appearance of the original deployed app.
 */

const InteractiveBadgeFrame = () => {
  // Full viewport height for overlay effect
  const iframeHeight = '100vh';

  return (
    <div className="w-full h-full pointer-events-auto">
      <iframe
        src="https://interactive-3d-event-badge-puce.vercel.app/"
        title="Interactive 3D Event Badge"
        className="w-full h-full border-0 block"
        style={{ height: iframeHeight, backgroundColor: 'transparent' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default InteractiveBadgeFrame;

