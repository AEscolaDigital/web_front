// import { useState } from 'react'
import { useJitsi } from 'react-jutsu'


const Call = () => {
        const jitsiConfig = {
          width: 700,
          height: 700,
          roomName: 'vpaas-magic-cookie-f3eccd0534e74685b2efb04e07eae9b3/SampleAppPointedFirefightersComposeAlong',
          parentNode: 'jitsi-container',
          jwt: 'eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtZjNlY2NkMDUzNGU3NDY4NWIyZWZiMDRlMDdlYWU5YjMvOGE4MGQzLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImV4cCI6MTYzNTk3NDcyMiwibmJmIjoxNjM1OTcxMTE3LCJpc3MiOiJjaGF0Iiwicm9vbSI6IioiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtZjNlY2NkMDUzNGU3NDY4NWIyZWZiMDRlMDdlYWU5YjMiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjpmYWxzZX0sInVzZXIiOnsibW9kZXJhdG9yIjp0cnVlLCJuYW1lIjoic2FtdWVsLmEuZ291bGFydCIsImlkIjoiIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJzYW11ZWwuYS5nb3VsYXJ0QGdtYWlsLmNvbSJ9fX0.D_EqtVsyiLFyZ98tg2xzmhKpsmYmnYrPca4QTMn8Tj1TIaxmwiXWXcCAlZjz3e0Zs38H_0FmVeeeeI9zejUW3P7W7dqx8TWxFwa63wTF8Tdve4iGMaNDF9U4MRkEkNnFvxAzcsWivWFQrIAQ4csiGM2bcrBbKWvkOwWSoFGs9R_vrfWyppDEXd2ED-TyXhbRrusUEYw4u6NCzgxcNUc97rFusC6uTUyg243bxfBF9_U4aCK8entn2pl-vs3jYQy2WYa1I2LDWTczCSS9r63UCeLTOFG9Hs3g7cinuEMkuImsg7V2T1gxc9nrVWLEwUj23E2fnaaSJxcuobo8brib_Q',

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