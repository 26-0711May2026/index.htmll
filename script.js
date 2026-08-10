* {
    box-sizing: border-box;
}

body {
    font-family: Arial;
    background: #e6e6fa;
    padding: 20px;
    margin: 0;
}
.container {
    max-width: 1100px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
}
h1 {
    text-align: center;
    color: #2e0a4e;
}
nav {
    text-align: center;
    background: #4a148c;
    padding: 12px;
    border-radius: 30px;
}
nav a {
    color: white;
    text-decoration: none;
    padding: 8px 15px;
    font-weight: bold;
}
nav a:hover {
    background: #7b1fa2;
    border-radius: 20px;
}
hr {
    border: 2px solid #4a148c;
    margin: 20px 0;
}
h2 {
    color: #2e0a4e;
    border-bottom: 2px solid #4a148c;
    padding-bottom: 8px;
}
table {
    width: 100%;
    border-collapse: collapse;
}
th {
    background: #6a1b9a;
    color: white;
    padding: 10px;
    border: 1px solid #4a148c;
}
td {
    padding: 10px;
    border: 1px solid #4a148c;
}
tr:nth-child(odd) {
    background: #f3e5f5;
}
tr:nth-child(even) {
    background: #e1bee7;
}
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin: 15px 0;
}
.item {
    background: #f3e5f5;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #4a148c;
    text-align: center;
}
.item img, .item iframe {
    width: 100%;
    border-radius: 8px;
    border: 2px solid #6a1b9a;
}
.item iframe {
    height: 180px;
}
audio {
    width: 100%;
}
.form-box {
    background: #f3e5f5;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #4a148c;
    max-width: 500px;
}
.form-box input {
    width: 100%;
    padding: 8px;
    border: 2px solid #6a1b9a;
    border-radius: 8px;
}
.btn {
    background: #4a148c;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 30px;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
}
.btn:hover {
    background: #6a1b9a;
}
footer {
    background: #4a148c;
    color: white;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
}

/* POPUP STYLES */
.popup-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 999;
    justify-content: center;
    align-items: center;
}
.popup-content {
    background: white;
    border-radius: 15px;
    padding: 30px;
    max-width: 400px;
    width: 90%;
    text-align: center;
    animation: slideIn 0.3s;
}
@keyframes slideIn {
    from { transform: translateY(-30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}
.popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.popup-header h2 {
    margin: 0;
    border: none;
}
.close-btn {
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #333;
}
.close-btn:hover {
    color: #4a148c;
}
.popup-body p {
    color: #555;
    line-height: 1.6;
    margin: 10px 0;
}
.popup-features {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin: 15px 0;
}
.popup-features span {
    background: #f3e5f5;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.9em;
    color: #2e0a4e;
}
.popup-enter-btn {
    background: #4a148c;
    color: white;
    padding: 10px 30px;
    border: none;
    border-radius: 30px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
}
.popup-enter-btn:hover {
    background: #6a1b9a;
}
.gender-group {
    display: flex;
    gap: 15px;
    align-items: center;
    margin: 10px 0;
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
