// import { useState } from 'react'
import { useJitsi } from 'react-jutsu'


const Call = () => {
        const jitsiConfig = {
          width: 700,
          height: 700,
          roomName: 'vpaas-magic-cookie-f3eccd0534e74685b2efb04e07eae9b3/SampleAppPointedFirefightersComposeAlong',
          parentNode: 'jitsi-container',
        };
        const { error } = useJitsi(jitsiConfig);
      
        return (
          <div>
            {error && <p>{error}</p>}
            <div id={jitsiConfig.parentNode} />
          </div>
        )
}

export default Call;