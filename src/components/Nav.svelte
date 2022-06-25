<nav>
	<ul>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
		<li>
			<a href="/blog">Blog</a>
		</li>
		<li>
			<a href="/login">Login</a>
		</li>
		<li>
			<a href="/logout">Logout</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		height: 5vh;
		background-color: #f5f5f5;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
	}
	ul {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	nav ul li {
		list-style: none;
		margin-right: 1rem;
	}
	nav ul li a {
		color: #000;
		text-decoration: none;
		font-weight: bold;
	}
	nav ul li a:hover {
		color: #000;
		text-decoration: underline;
	}
	nav a:hover {
		background-color: #f5f5f5;
	}
</style>
