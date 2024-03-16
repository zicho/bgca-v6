<div class="flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-base-200">
	<div
		class="h-full lg:h-fit w-full rounded border-base-300 border shadow-lg bg-base-100 overflow-hidden lg:max-w-lg"
	>
		<div class="px-8 py-6 h-full flex flex-col">
			<div class="flex flex-col flex-1 lg:mb-6">
				<div class="mb-6">
					<h1 class="text-4xl font-extralight text-center text-primary">Login</h1>
				</div>
				<div class="mb-6">
					<label class="block text-base-content text-sm font-bold mb-2" for="username">
						Username
					</label>
					<input
						class="input input-bordered w-full"
						id="username"
						type="text"
						placeholder="Enter your username"
					/>
				</div>
				<div class="mb-6">
					<label class="block text-base-content text-sm font-bold mb-2" for="password">
						Password
					</label>
					<input
						class="input input-bordered w-full"
						id="password"
						type="password"
						placeholder="Enter your password"
					/>
				</div>
				<div class="mb-12 lg:mb-0">
					<button class="w-full btn btn-primary" type="button"> Sign in </button>
				</div>
				<div class="lg:hidden text-center w-full lg:max-w-lg bg-error border border-error p-4 rounded text-error-content">
					<span>Error</span>
				</div>
			</div>

			<div class="flex flex-col gap-y-4">
				<hr />
				<button class="btn btn-link" type="button"> Register </button>
			</div>
		</div>
	</div>
	<div class="mt-8 invisible lg:visible text-center w-full lg:max-w-lg bg-error border border-error p-4 rounded text-error-content">
		<span>Error</span>
	</div>
</div>
