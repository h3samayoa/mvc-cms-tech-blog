async function editHandler(event) {
    event.preventDefault();

    const title = document.querySelector('').value;
    const post_content = document.querySelector('').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_content,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('').addEventListener('submit', editHandler);