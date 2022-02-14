console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(stringMsg, name, message) {
    const escaped = message
        .replace(/&/g, '&amp;')
        .replace(/'/g, '&apos;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    return stringMsg[0] + name + stringMsg[1] + escaped + stringMsg[2];
}