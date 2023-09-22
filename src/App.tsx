import React, { CSSProperties, useState } from 'react'
import AgoraUIKit, { layout } from 'agora-react-uikit'
import 'agora-react-uikit/dist/index.css'

const App: React.FunctionComponent = () => {
  const [videocall, setVideoCall] = useState(true)
  const [isHost, setHost] = useState(true)
  const [isPinned, setPinned] = useState(false)
  const [username, setUsername] = useState('')
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        {/* <h1 style={styles.heading}>Agora React Web UI Kit</h1> */}
        {videocall ? (
          <>
            <div style={styles.nav}>
              <p style={{ fontSize: 20, width: 200 }}>
                You're {isHost ? 'a host' : 'an audience'}
              </p>
              <p style={styles.btn} onClick={() => setHost(!isHost)}>
                Change Role
              </p>
              <p style={styles.btn} onClick={() => setPinned(!isPinned)}>
                Change Layout
              </p>
            </div>
            <AgoraUIKit
              rtcProps={{
                appId: 'e3ce151e6cf6449fbd6918d6571f3358',
                channel: 'anuragTest',
                token: '007eJxTYHAJ4erTjYgQrLp0mOPUbusP/UzZz9/PU9recvYN2zNTJX0FhlTj5FRDU8NUs+Q0MxMTy7SkFDNLQ4sUM1NzwzRjY1MLzhLe1IZARoZY9d2MjAwQCOJzMSTmlRYlpoekFpcwMAAAmfsfww==', // add your token if using app in secured mode
                role: isHost ? 'host' : 'audience',
                layout: isPinned ? layout.pin : layout.grid,
                enableScreensharing: true
              }}
              rtmProps={{ username: username || 'user', displayUsername: true }}
              callbacks={callbacks}
            />
          </>
        ) : (
          <div style={styles.nav}>
            <input
              style={styles.input}
              placeholder='nickname'
              type='text'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
            <h3 style={styles.btn} onClick={() => setVideoCall(true)}>
              Start Call
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flex: 1,
    backgroundColor: '#007bff22'
  },
  heading: { textAlign: 'center' as const, marginBottom: 0 },
  videoContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  } as CSSProperties,
  nav: { display: 'flex', justifyContent: 'space-around' },
  btn: {
    backgroundColor: '#007bff',
    cursor: 'pointer',
    borderRadius: 5,
    padding: '4px 8px',
    color: '#ffffff',
    fontSize: 20
  },
  input: { display: 'flex', height: 24, alignSelf: 'center' } as CSSProperties
}

export default App
