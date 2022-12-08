import * as React from "react";
// import { ethers } from "ethers";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import Alert from '@mui/material/Alert';
import { useMoralis } from "react-moralis";

function App() {

  const { isAuthenticated, authenticate } = useMoralis()
  const walletconnectAuth = async () => {
    try {
      await authenticate({
        provider: "walletconnect",
        signingMassage: "Connect With Localhost By ReactJs",
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={3}>
          {!isAuthenticated ? (
            <Button onClick={walletconnectAuth} variant="contained">Login & Save ETH Address</Button>
          ) : (
            <>
              <p className="text-gray-600">Welcom</p>
            </>
          )}
          {/* {networkVersion == 1 ? (
            <>
              <p className="text-gray-600">Address: {wallet.address}</p>
              <p className="text-gray-600">ETH Balance: {balanse.Balance}</p>
              <p className="text-gray-600">Network: {network.network}</p>
              <Button onClick={logout} variant="contained">LogOut</Button>
              </>
          ) : (
            <Alert severity="error" sx={{ mt: "1rem" }}>Pleas Use Ethereum Mainnet In Your Wallet</Alert>
          )} */}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
