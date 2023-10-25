import json
import qrcode
from web3 import Web3
from PIL import Image

# Initialize Web3 with a testnet provider (e.g., Infura)
w3 = Web3(Web3.HTTPProvider("YOUR_INFURA_TESTNET_ENDPOINT"))

# Define your smart contract ABI and address (assuming you have deployed one)
contract_address = "YOUR_CONTRACT_ADDRESS"
contract_abi = json.loads('''
    [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenURI",
                    "type": "string"
                }
            ],
            "name": "mintNFT",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
''')

# Wallet private key for signing transactions
private_key = "YOUR_PRIVATE_KEY"

# JSON data for the NFT
nft_data = {
    "Product_category": {
        "EventStates": [
            {
                "EventID": "MANUFACTURING",
                # ... (the rest of your JSON data)
            }
        ]
    }
}

# Convert the JSON data to a string
nft_json_data = json.dumps(nft_data)

# Mint NFT and get the token ID
def mint_nft():
    nonce = w3.eth.getTransactionCount(w3.toChecksumAddress("YOUR_WALLET_ADDRESS"))
    contract = w3.eth.contract(address=contract_address, abi=contract_abi)
    transaction = contract.functions.mintNFT(nft_json_data).buildTransaction({
        'chainId': 4,  # Rinkeby testnet
        'gas': 2000000,
        'gasPrice': w3.toWei('20', 'gwei'),
        'nonce': nonce,
    })
    signed_transaction = w3.eth.account.signTransaction(transaction, private_key)
    tx_hash = w3.eth.sendRawTransaction(signed_transaction.rawTransaction)
    w3.eth.waitForTransactionReceipt(tx_hash)
    token_id = w3.eth.getLogs({'address': contract_address})[-1]['topics'][3].hex()
    return token_id

# Generate QR code from the NFT JSON data
def generate_qr_code(json_data, filename):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(json_data)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    img.save(filename)

# Main program
if __name__ == "__main__":
    token_id = mint_nft()
    qr_code_filename = f"nft_qr_{token_id}.png"
    generate_qr_code(nft_json_data, qr_code_filename)
    print(f"NFT Minted with Token ID: {token_id}")
    print(f"QR Code saved as {qr_code_filename}")